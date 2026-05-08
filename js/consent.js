(function() {
    // Already consented? Skip
    if (localStorage.getItem('p2l_consent')) return;

    // Inject CSS
    var style = document.createElement('style');
    style.textContent = `
        #p2l-consent {
            position: fixed;
            bottom: 0; left: 0; right: 0;
            z-index: 99999;
            background: #0f172a;
            color: white;
            padding: 18px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
            animation: slideUp 0.4s ease;
        }
        @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
        }
        #p2l-consent p {
            margin: 0;
            font-size: 0.9rem;
            color: #cbd5e1;
            max-width: 700px;
            line-height: 1.5;
        }
        #p2l-consent a {
            color: #60a5fa;
            text-decoration: underline;
        }
        .p2l-consent-btns {
            display: flex;
            gap: 10px;
            flex-shrink: 0;
        }
        .p2l-btn-accept {
            background: #2563eb;
            color: white;
            border: none;
            padding: 10px 22px;
            border-radius: 40px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }
        .p2l-btn-accept:hover { background: #1d4ed8; }
        .p2l-btn-decline {
            background: transparent;
            color: #94a3b8;
            border: 1px solid #475569;
            padding: 10px 22px;
            border-radius: 40px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.2s;
        }
        .p2l-btn-decline:hover { border-color: #94a3b8; color: white; }
        @media (max-width: 600px) {
            #p2l-consent { flex-direction: column; align-items: flex-start; }
            .p2l-consent-btns { width: 100%; }
            .p2l-btn-accept, .p2l-btn-decline { flex: 1; text-align: center; }
        }
    `;
    document.head.appendChild(style);

    // Inject Banner HTML
    var banner = document.createElement('div');
    banner.id = 'p2l-consent';
    banner.innerHTML = `
        <p>
            We use cookies to improve your experience and to connect you with local service providers.
            By using Page2Lead, you agree to our
            <a href="/privacy">Privacy Policy</a> and
            <a href="/terms">Terms of Service</a>.
        </p>
        <div class="p2l-consent-btns">
            <button class="p2l-btn-decline" id="p2l-decline">Decline</button>
            <button class="p2l-btn-accept" id="p2l-accept">Accept All</button>
        </div>
    `;
    document.body.appendChild(banner);

    // Accept
    document.getElementById('p2l-accept').addEventListener('click', function() {
        localStorage.setItem('p2l_consent', 'accepted');
        removeBanner();
    });

    // Decline
    document.getElementById('p2l-decline').addEventListener('click', function() {
        localStorage.setItem('p2l_consent', 'declined');
        removeBanner();
    });

    function removeBanner() {
        var el = document.getElementById('p2l-consent');
        if (el) {
            el.style.animation = 'none';
            el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            el.style.transform = 'translateY(100%)';
            el.style.opacity = '0';
            setTimeout(function() { el.remove(); }, 300);
        }
    }
})();
