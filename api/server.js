const express = require('express');
const cors = require('cors');
const zlib = require('zlib');
const { Pool } = require('pg');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// Hide X-Powered-By header
app.disable('x-powered-by');

// WWW to non-www 301 redirect
app.use(function(req, res, next) {
    var host = req.headers.host || '';
    if (host.startsWith('www.')) {
        return res.redirect(301, 'https://' + host.slice(4) + req.originalUrl);
    }
    next();
});

// Manual GZIP compression (no external package needed)
app.use(function(req, res, next) {
    var acceptEncoding = req.headers['accept-encoding'] || '';
    if (!acceptEncoding.includes('gzip')) return next();

    var contentType = res.getHeader('Content-Type') || '';
    var compressTypes = /html|css|javascript|json|text|xml|svg/;

    var _send = res.send.bind(res);
    res.send = function(body) {
        if (typeof body !== 'string' && !Buffer.isBuffer(body)) return _send(body);
        zlib.gzip(Buffer.isBuffer(body) ? body : Buffer.from(body), function(err, compressed) {
            if (err) return _send(body);
            res.setHeader('Content-Encoding', 'gzip');
            res.setHeader('Content-Length', compressed.length);
            _send(compressed);
        });
    };
    next();
});

// Security + SEO Headers
app.use(function(req, res, next) {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files with cache headers
app.use(express.static(path.join(__dirname), {
    maxAge: '7d',
    etag: true,
    setHeaders: function(res, filePath) {
        if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        }
    }
}));

// ============================================
// PostgreSQL SETUP
// ============================================
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// ============================================
// EMAIL SETUP
// ============================================
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

function sendEmailAlert(subject, htmlBody) {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) return;
    transporter.sendMail({
        from: '"Page2Lead" <' + process.env.GMAIL_USER + '>',
        to: process.env.GMAIL_USER,
        subject: subject,
        html: htmlBody
    }, function(err) {
        if (err) console.error('Email error:', err.message);
        else console.log('📧 Email sent:', subject);
    });
}

// ============================================
// CREATE TABLES
// ============================================
async function createTables() {
    await pool.query(`CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        service TEXT NOT NULL,
        city TEXT NOT NULL DEFAULT 'Ajmer',
        area TEXT,
        problem TEXT,
        page TEXT,
        status TEXT DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        contacted_at TIMESTAMP
    )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS providers (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        business_name TEXT,
        phone TEXT NOT NULL,
        whatsapp_number TEXT,
        service_type TEXT NOT NULL,
        city TEXT DEFAULT 'Ajmer',
        areas TEXT,
        price_range TEXT,
        notes TEXT,
        active INTEGER DEFAULT 1,
        status TEXT DEFAULT 'online',
        free_leads_given INTEGER DEFAULT 0,
        free_leads_limit INTEGER DEFAULT 3,
        credits INTEGER DEFAULT 0,
        is_paid INTEGER DEFAULT 0,
        total_leads_received INTEGER DEFAULT 0,
        last_lead_sent TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS lead_assignments (
        id SERIAL PRIMARY KEY,
        lead_id INTEGER REFERENCES leads(id),
        provider_id INTEGER REFERENCES providers(id),
        sent_via TEXT,
        message_content TEXT,
        sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS provider_alerts (
        id SERIAL PRIMARY KEY,
        provider_id INTEGER,
        alert_type TEXT,
        message TEXT,
        is_sent INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS lead_pricing (
        id SERIAL PRIMARY KEY,
        service_type TEXT UNIQUE NOT NULL,
        price_per_lead INTEGER NOT NULL DEFAULT 100,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS lead_replace_requests (
        id SERIAL PRIMARY KEY,
        provider_id INTEGER REFERENCES providers(id),
        lead_id INTEGER REFERENCES leads(id),
        reason TEXT,
        status TEXT DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        resolved_at TIMESTAMP
    )`);

    // Default pricing
    const pc = await pool.query('SELECT COUNT(*) as c FROM lead_pricing');
    if (parseInt(pc.rows[0].c) === 0) {
        await pool.query(`INSERT INTO lead_pricing (service_type, price_per_lead) VALUES
            ('AC Repair',150),('Plumber',100),('Electrician',100),('Cleaning',120),('Pest Control',150)
            ON CONFLICT DO NOTHING`);
    }

    // Sample providers
    const pvc = await pool.query('SELECT COUNT(*) as c FROM providers');
    if (parseInt(pvc.rows[0].c) === 0) {
        await pool.query(`INSERT INTO providers (name,business_name,phone,whatsapp_number,service_type,areas) VALUES
            ('Rahul Sharma','Rahul AC Services','9829000011','919829000011','AC Repair','Vaishali Nagar, Ana Sagar'),
            ('Suresh Kumar','Suresh Plumbing','9829000022','919829000022','Plumber','Kishangarh Road, Delhi Gate'),
            ('Mohit Singh','Mohit Electricals','9829000033','919829000033','Electrician','Madar Gate, Dargah Bazaar'),
            ('Priya Sharma','Priya Cleaners','9829000044','919829000044','Cleaning','Subhash Nagar, Panchsheel'),
            ('Amit Gupta','Amit Pest Control','9829000055','919829000055','Pest Control','Civil Lines, Gandhi Nagar')`);
    }

    console.log('✅ All tables ready');
}

// ============================================
// HELPER — Alert Provider
// ============================================
function alertProvider(provider, type) {
    var msg = type === 'trial_over'
        ? '⚠️ Page2Lead\n\nHi ' + (provider.business_name || provider.name) + ',\n\nYour FREE TRIAL is over (3 free leads used).\n\nRecharge to get more leads:\n10 Leads — Rs.800\n25 Leads — Rs.1,800\n50 Leads — Rs.3,200\n\nReply to recharge.\nPage2Lead'
        : '⚠️ Page2Lead\n\nHi ' + (provider.business_name || provider.name) + ',\n\nYour CREDITS ARE FINISHED.\n\nRecharge now:\n10 Leads — Rs.800\n25 Leads — Rs.1,800\n50 Leads — Rs.3,200\n\nReply to recharge.\nPage2Lead';

    console.log('\n🚨 ALERT — ' + type.toUpperCase() + ' | ' + (provider.business_name || provider.name));
    if (provider.whatsapp_number) {
        console.log('WhatsApp: https://wa.me/' + provider.whatsapp_number + '?text=' + encodeURIComponent(msg));
    }

    pool.query("INSERT INTO provider_alerts (provider_id, alert_type, message) VALUES ($1,$2,$3)",
        [provider.id, type, msg]);
    return msg;
}

// ============================================
// HELPER — Auto Assign Lead
// ============================================
async function autoAssignLead(lead) {
    try {
        const res = await pool.query(
            "SELECT * FROM providers WHERE service_type=$1 AND active=1 AND status='online' ORDER BY last_lead_sent ASC NULLS FIRST",
            [lead.service]
        );
        let selected = null;
        for (let p of res.rows) {
            if (!p.is_paid && p.free_leads_given < p.free_leads_limit) { selected = p; break; }
            if (p.is_paid && p.credits > 0) { selected = p; break; }
        }
        if (!selected) return null;

        const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        const msg = '🔔 New Lead!\n\n👤 ' + lead.name + '\n📞 ' + lead.phone + '\n🔧 ' + lead.service + '\n📍 ' + (lead.area||'Ajmer') + '\n📝 ' + (lead.problem||'Not specified') + '\n\n⏱️ ' + now + '\n\n✅ Page2Lead';

        await pool.query("INSERT INTO lead_assignments (lead_id,provider_id,sent_via,message_content) VALUES ($1,$2,'whatsapp',$3)",
            [lead.id, selected.id, msg]);
        await pool.query("UPDATE leads SET status='sent', contacted_at=CURRENT_TIMESTAMP WHERE id=$1", [lead.id]);

        if (!selected.is_paid) {
            const newCount = (parseInt(selected.free_leads_given)||0) + 1;
            await pool.query("UPDATE providers SET free_leads_given=free_leads_given+1, total_leads_received=total_leads_received+1, last_lead_sent=CURRENT_TIMESTAMP WHERE id=$1", [selected.id]);
            if (newCount >= parseInt(selected.free_leads_limit)) alertProvider(selected, 'trial_over');
        } else {
            const newCreds = (parseInt(selected.credits)||0) - 1;
            await pool.query("UPDATE providers SET credits=credits-1, total_leads_received=total_leads_received+1, last_lead_sent=CURRENT_TIMESTAMP WHERE id=$1", [selected.id]);
            if (newCreds <= 0) alertProvider(selected, 'credits_over');
        }

        const waUrl = selected.whatsapp_number
            ? 'https://wa.me/' + selected.whatsapp_number + '?text=' + encodeURIComponent(msg) : null;

        console.log('✅ Lead #' + lead.id + ' → ' + (selected.business_name||selected.name));

        // Email to admin
        sendEmailAlert(
            '🔔 New Lead — ' + lead.service + ' — ' + (lead.area||'Ajmer'),
            '<div style="font-family:sans-serif;max-width:500px;">' +
            '<h2 style="color:#2563eb;">New Lead Received!</h2>' +
            '<table style="width:100%;border-collapse:collapse;">' +
            '<tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Customer</td><td style="padding:10px;border:1px solid #e2e8f0;">' + lead.name + '</td></tr>' +
            '<tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Phone</td><td style="padding:10px;border:1px solid #e2e8f0;">' + lead.phone + '</td></tr>' +
            '<tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Service</td><td style="padding:10px;border:1px solid #e2e8f0;">' + lead.service + '</td></tr>' +
            '<tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Area</td><td style="padding:10px;border:1px solid #e2e8f0;">' + (lead.area||'Ajmer') + '</td></tr>' +
            '<tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Problem</td><td style="padding:10px;border:1px solid #e2e8f0;">' + (lead.problem||'Not specified') + '</td></tr>' +
            '<tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Sent To</td><td style="padding:10px;border:1px solid #e2e8f0;">' + (selected.business_name||selected.name) + '</td></tr>' +
            '</table>' +
            (waUrl ? '<br><a href="' + waUrl + '" style="background:#25D366;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;">📱 Send WhatsApp</a>' : '') +
            '<br><br><a href="' + (process.env.APP_URL||'http://localhost:5000') + '/admin" style="background:#2563eb;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;margin-left:10px;">📊 Open Dashboard</a>' +
            '</div>'
        );

        return { provider: selected, whatsappUrl: waUrl };
    } catch (err) {
        console.error('Auto assign error:', err.message);
        return null;
    }
}

// ============================================
// LEAD SUBMISSION
// ============================================
app.post('/api/lead', async function(req, res) {
    var name    = (req.body.name    ||'').trim();
    var phone   = (req.body.phone   ||'').trim();
    var service = (req.body.service ||'').trim();
    var city    = (req.body.city    ||'Ajmer').trim();
    var area    = (req.body.area    ||'').trim();
    var problem = (req.body.problem ||'').trim();
    var page    = (req.body.page    ||'Website').trim();
    if (!name||!phone) return res.status(400).json({ success:false, message:'Name and phone required' });
    try {
        const r = await pool.query(
            "INSERT INTO leads (name,phone,service,city,area,problem,page,status) VALUES ($1,$2,$3,$4,$5,$6,$7,'new') RETURNING id",
            [name,phone,service,city,area,problem,page]
        );
        const leadId = r.rows[0].id;
        const assignment = await autoAssignLead({ id:leadId, name, phone, service, area, problem });
        res.status(201).json({ success:true, message:'Thank you! A local provider will call you back shortly.', leadId, assigned:!!assignment });
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ success:false, message:'Server error. Please try again.' });
    }
});

// ============================================
// LEADS API
// ============================================
app.get('/api/admin/leads', async function(req,res) {
    try { const r = await pool.query('SELECT * FROM leads ORDER BY created_at DESC'); res.json({ success:true, data:r.rows }); }
    catch(err) { res.status(500).json({ error:err.message }); }
});

app.put('/api/admin/leads/:id/status', async function(req,res) {
    if (!['new','sent','responded','converted','closed'].includes(req.body.status)) return res.status(400).json({ error:'Invalid status' });
    try { await pool.query("UPDATE leads SET status=$1 WHERE id=$2",[req.body.status,req.params.id]); res.json({ success:true }); }
    catch(err) { res.status(500).json({ error:err.message }); }
});

// ============================================
// PROVIDERS API
// ============================================
app.get('/api/admin/providers', async function(req,res) {
    try { const r = await pool.query("SELECT * FROM providers WHERE active=1 ORDER BY service_type"); res.json({ success:true, data:r.rows }); }
    catch(err) { res.status(500).json({ error:err.message }); }
});

app.get('/api/admin/providers/:id', async function(req,res) {
    try {
        const r = await pool.query("SELECT * FROM providers WHERE id=$1",[req.params.id]);
        if (!r.rows.length) return res.status(404).json({ error:'Not found' });
        res.json({ success:true, data:r.rows[0] });
    } catch(err) { res.status(500).json({ error:err.message }); }
});

app.post('/api/admin/providers', async function(req,res) {
    const b=req.body;
    if (!b.name||!b.phone||!b.service_type) return res.status(400).json({ error:'Name, phone, service_type required' });
    try {
        const r = await pool.query("INSERT INTO providers (name,business_name,phone,whatsapp_number,service_type,city,areas,price_range,notes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id",
            [b.name,b.business_name,b.phone,b.whatsapp_number,b.service_type,b.city||'Ajmer',b.areas,b.price_range,b.notes]);
        res.json({ success:true, providerId:r.rows[0].id });
    } catch(err) { res.status(500).json({ error:err.message }); }
});

app.put('/api/admin/providers/:id', async function(req,res) {
    const b=req.body;
    try {
        await pool.query("UPDATE providers SET name=$1,business_name=$2,phone=$3,whatsapp_number=$4,service_type=$5,city=$6,areas=$7,price_range=$8,notes=$9 WHERE id=$10",
            [b.name,b.business_name,b.phone,b.whatsapp_number,b.service_type,b.city,b.areas,b.price_range,b.notes,req.params.id]);
        res.json({ success:true });
    } catch(err) { res.status(500).json({ error:err.message }); }
});

app.delete('/api/admin/providers/:id', async function(req,res) {
    try { await pool.query("UPDATE providers SET active=0 WHERE id=$1",[req.params.id]); res.json({ success:true }); }
    catch(err) { res.status(500).json({ error:err.message }); }
});

app.put('/api/admin/providers/:id/status', async function(req,res) {
    if (!['online','offline'].includes(req.body.status)) return res.status(400).json({ error:'Invalid' });
    try { await pool.query("UPDATE providers SET status=$1 WHERE id=$2",[req.body.status,req.params.id]); res.json({ success:true, message:'Provider is now '+req.body.status }); }
    catch(err) { res.status(500).json({ error:err.message }); }
});

app.put('/api/admin/providers/:id/credits', async function(req,res) {
    const credits=parseInt(req.body.credits)||0;
    try { await pool.query("UPDATE providers SET credits=credits+$1, is_paid=1 WHERE id=$2",[credits,req.params.id]); res.json({ success:true }); }
    catch(err) { res.status(500).json({ error:err.message }); }
});

app.put('/api/admin/providers/:id/refund', async function(req,res) {
    const credits=parseInt(req.body.credits)||1;
    try {
        const r=await pool.query("SELECT * FROM providers WHERE id=$1",[req.params.id]);
        if (!r.rows.length) return res.status(404).json({ error:'Not found' });
        const p=r.rows[0];
        if (!p.is_paid) await pool.query("UPDATE providers SET free_leads_given=GREATEST(0,free_leads_given-$1) WHERE id=$2",[credits,req.params.id]);
        else await pool.query("UPDATE providers SET credits=credits+$1 WHERE id=$2",[credits,req.params.id]);
        res.json({ success:true, message:credits+' credit(s) refunded' });
    } catch(err) { res.status(500).json({ error:err.message }); }
});

// ============================================
// SEND LEAD MANUALLY
// ============================================
app.post('/api/admin/send-lead', async function(req,res) {
    const { lead_id, provider_id, sent_via } = req.body;
    if (!lead_id||!provider_id) return res.status(400).json({ error:'lead_id and provider_id required' });
    try {
        const lr=await pool.query("SELECT * FROM leads WHERE id=$1",[lead_id]);
        const pr=await pool.query("SELECT * FROM providers WHERE id=$1",[provider_id]);
        if (!lr.rows.length) return res.status(404).json({ error:'Lead not found' });
        if (!pr.rows.length) return res.status(404).json({ error:'Provider not found' });
        const lead=lr.rows[0], provider=pr.rows[0];
        const now=new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'});
        const msg='🔔 New Lead!\n\n👤 '+lead.name+'\n📞 '+lead.phone+'\n🔧 '+lead.service+'\n📍 '+(lead.area||'Ajmer')+'\n📝 '+(lead.problem||'Not specified')+'\n\n⏱️ '+now+'\n\n✅ Page2Lead';
        await pool.query("INSERT INTO lead_assignments (lead_id,provider_id,sent_via,message_content) VALUES ($1,$2,$3,$4)",[lead_id,provider_id,sent_via||'whatsapp',msg]);
        if (!provider.is_paid) {
            const newCount=(parseInt(provider.free_leads_given)||0)+1;
            await pool.query("UPDATE providers SET free_leads_given=free_leads_given+1,total_leads_received=total_leads_received+1,last_lead_sent=CURRENT_TIMESTAMP WHERE id=$1",[provider_id]);
            if (newCount>=parseInt(provider.free_leads_limit)) alertProvider(provider,'trial_over');
        } else {
            const newCreds=(parseInt(provider.credits)||0)-1;
            await pool.query("UPDATE providers SET credits=credits-1,total_leads_received=total_leads_received+1,last_lead_sent=CURRENT_TIMESTAMP WHERE id=$1",[provider_id]);
            if (newCreds<=0) alertProvider(provider,'credits_over');
        }
        await pool.query("UPDATE leads SET status='sent',contacted_at=CURRENT_TIMESTAMP WHERE id=$1",[lead_id]);
        const waUrl=(sent_via==='whatsapp'&&provider.whatsapp_number)?'https://wa.me/'+provider.whatsapp_number+'?text='+encodeURIComponent(msg):null;
        res.json({ success:true, whatsappUrl:waUrl });
    } catch(err) { res.status(500).json({ error:err.message }); }
});

// ============================================
// STATS
// ============================================
app.get('/api/admin/stats', async function(req,res) {
    try {
        const s=await pool.query("SELECT COUNT(*) as total_leads, SUM(CASE WHEN status='new' THEN 1 ELSE 0 END) as new_leads, SUM(CASE WHEN status='converted' THEN 1 ELSE 0 END) as converted_leads, SUM(CASE WHEN DATE(created_at)=CURRENT_DATE THEN 1 ELSE 0 END) as today_leads FROM leads");
        const p=await pool.query("SELECT COUNT(*) as total_providers, SUM(CASE WHEN status='online' THEN 1 ELSE 0 END) as online_providers FROM providers WHERE active=1");
        res.json({ success:true, data:{ total_leads:parseInt(s.rows[0].total_leads)||0, new_leads:parseInt(s.rows[0].new_leads)||0, converted_leads:parseInt(s.rows[0].converted_leads)||0, today_leads:parseInt(s.rows[0].today_leads)||0, total_providers:parseInt(p.rows[0].total_providers)||0, online_providers:parseInt(p.rows[0].online_providers)||0 }});
    } catch(err) { res.status(500).json({ error:err.message }); }
});

// ============================================
// LEAD PRICING
// ============================================
app.get('/api/admin/pricing', async function(req,res) {
    try { const r=await pool.query("SELECT * FROM lead_pricing ORDER BY service_type"); res.json({ success:true, data:r.rows }); }
    catch(err) { res.status(500).json({ error:err.message }); }
});

app.put('/api/admin/pricing/:service', async function(req,res) {
    const service=decodeURIComponent(req.params.service), price=parseInt(req.body.price_per_lead);
    if (!price||price<0) return res.status(400).json({ error:'Valid price required' });
    try {
        await pool.query("INSERT INTO lead_pricing (service_type,price_per_lead) VALUES ($1,$2) ON CONFLICT (service_type) DO UPDATE SET price_per_lead=$2, updated_at=CURRENT_TIMESTAMP",[service,price]);
        res.json({ success:true });
    } catch(err) { res.status(500).json({ error:err.message }); }
});

// ============================================
// REPLACE REQUESTS
// ============================================
app.get('/api/admin/replace-requests', async function(req,res) {
    try {
        const r=await pool.query("SELECT lr.*, p.name as provider_name, p.business_name, p.phone as provider_phone, p.is_paid, l.name as customer_name, l.phone as customer_phone, l.service FROM lead_replace_requests lr JOIN providers p ON lr.provider_id=p.id JOIN leads l ON lr.lead_id=l.id ORDER BY lr.created_at DESC");
        res.json({ success:true, data:r.rows });
    } catch(err) { res.status(500).json({ error:err.message }); }
});

app.post('/api/admin/replace-requests', async function(req,res) {
    const {provider_id,lead_id,reason}=req.body;
    if (!provider_id||!lead_id) return res.status(400).json({ error:'provider_id and lead_id required' });
    try {
        const r=await pool.query("INSERT INTO lead_replace_requests (provider_id,lead_id,reason,status) VALUES ($1,$2,$3,'pending') RETURNING id",[provider_id,lead_id,reason||'Fake or invalid lead']);
        res.json({ success:true, requestId:r.rows[0].id });
    } catch(err) { res.status(500).json({ error:err.message }); }
});

app.put('/api/admin/replace-requests/:id/approve', async function(req,res) {
    try {
        const rr=await pool.query("SELECT * FROM lead_replace_requests WHERE id=$1",[req.params.id]);
        if (!rr.rows.length||rr.rows[0].status!=='pending') return res.status(400).json({ error:'Not found or already resolved' });
        const pr=await pool.query("SELECT * FROM providers WHERE id=$1",[rr.rows[0].provider_id]);
        if (!pr.rows.length) return res.status(404).json({ error:'Provider not found' });
        const p=pr.rows[0];
        if (!p.is_paid) await pool.query("UPDATE providers SET free_leads_given=GREATEST(0,free_leads_given-1) WHERE id=$1",[p.id]);
        else await pool.query("UPDATE providers SET credits=credits+1 WHERE id=$1",[p.id]);
        await pool.query("UPDATE lead_replace_requests SET status='approved',resolved_at=CURRENT_TIMESTAMP WHERE id=$1",[req.params.id]);
        res.json({ success:true, message:'Credit refunded to '+(p.business_name||p.name) });
    } catch(err) { res.status(500).json({ error:err.message }); }
});

app.put('/api/admin/replace-requests/:id/reject', async function(req,res) {
    try { await pool.query("UPDATE lead_replace_requests SET status='rejected',resolved_at=CURRENT_TIMESTAMP WHERE id=$1",[req.params.id]); res.json({ success:true }); }
    catch(err) { res.status(500).json({ error:err.message }); }
});

// ============================================
// ALERTS
// ============================================
app.get('/api/admin/alerts', async function(req,res) {
    try {
        const r=await pool.query("SELECT pa.*, p.name, p.business_name, p.phone, p.whatsapp_number FROM provider_alerts pa JOIN providers p ON pa.provider_id=p.id ORDER BY pa.created_at DESC LIMIT 50");
        res.json({ success:true, data:r.rows });
    } catch(err) { res.json({ success:true, data:[] }); }
});

app.put('/api/admin/alerts/:id/sent', async function(req,res) {
    try { await pool.query("UPDATE provider_alerts SET is_sent=1 WHERE id=$1",[req.params.id]); res.json({ success:true }); }
    catch(err) { res.status(500).json({ error:err.message }); }
});

app.get('/api/test', function(req,res) { res.json({ success:true, message:'Page2Lead on PostgreSQL ✅' }); });

// ============================================
// SERVE PAGES
// ============================================
app.get('/',                   function(req,res) { res.sendFile(path.join(__dirname,'index.html')); });
app.get('/ac-repair-ajmer',    function(req,res) { res.sendFile(path.join(__dirname,'services','ac-repair-ajmer.html')); });
app.get('/plumber-ajmer',      function(req,res) { res.sendFile(path.join(__dirname,'services','plumber-ajmer.html')); });
app.get('/electrician-ajmer',  function(req,res) { res.sendFile(path.join(__dirname,'services','electrician-ajmer.html')); });
app.get('/cleaning-ajmer',     function(req,res) { res.sendFile(path.join(__dirname,'services','cleaning-ajmer.html')); });
app.get('/pest-control-ajmer', function(req,res) { res.sendFile(path.join(__dirname,'services','pest-control-ajmer.html')); });
app.get('/about',   function(req,res) { res.sendFile(path.join(__dirname,'about.html')); });
app.get('/contact', function(req,res) { res.sendFile(path.join(__dirname,'contact.html')); });
app.get('/privacy', function(req,res) { res.sendFile(path.join(__dirname,'privacy.html')); });
app.get('/terms',   function(req,res) { res.sendFile(path.join(__dirname,'terms.html')); });
app.get('/coaching',       function(req,res) { res.sendFile(path.join(__dirname,'coaching.html')); });
app.get('/coaching-leads', function(req,res) { res.sendFile(path.join(__dirname,'coaching-leads.html')); });
app.get('/admin',       function(req,res) { res.sendFile(path.join(__dirname,'admin','dashboard.html')); });
app.get('/sitemap.xml', function(req,res) { res.sendFile(path.join(__dirname,'sitemap.xml')); });
app.get('/robots.txt',  function(req,res) { res.sendFile(path.join(__dirname,'robots.txt')); });

// ============================================
// START
// ============================================
const PORT = process.env.PORT || 5000;
createTables().then(function() {
    app.listen(PORT, function() {
        console.log('\n🚀 Page2Lead Started!');
        console.log('🌐 http://localhost:' + PORT);
        console.log('📊 Admin: http://localhost:' + PORT + '/admin');
        console.log('📧 Email: ' + (process.env.GMAIL_USER || 'Not configured'));
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    });
}).catch(function(err) {
    console.error('❌ Startup error:', err.message);
});
