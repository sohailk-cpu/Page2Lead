// SEO Setup Automation Script
// Run this after deploying your site

const seoSteps = [
    {
        step: 1,
        task: "Google Search Console Setup",
        url: "https://search.google.com/search-console",
        instructions: "Add property, verify via HTML tag, submit sitemap"
    },
    {
        step: 2,
        task: "Google Analytics Setup",
        url: "https://analytics.google.com",
        instructions: "Create account, get G- ID, add to all HTML files"
    },
    {
        step: 3,
        task: "Bing Webmaster Tools",
        url: "https://bing.com/webmasters",
        instructions: "Add site, verify, submit sitemap"
    },
    {
        step: 4,
        task: "Image Optimization",
        instructions: "Add alt text, titles, dimensions to all images"
    },
    {
        step: 5,
        task: "Schema Markup",
        instructions: "Add JSON-LD schema to all pages"
    },
    {
        step: 6,
        task: "Performance Check",
        url: "https://developers.google.com/speed/pagespeed/insights/",
        instructions: "Test site speed, optimize images"
    },
    {
        step: 7,
        task: "Mobile Test",
        url: "https://search.google.com/test/mobile-friendly",
        instructions: "Ensure mobile responsiveness"
    },
    {
        step: 8,
        task: "Submit to Search Engines",
        instructions: "Manually submit sitemap to Google, Bing"
    }
];

console.log("=== SEO SETUP CHECKLIST FOR PAGE2LEAD ===");
console.log("Website: https://sohailk-cpu.github.io/Page2Lead/");
console.log("=========================================");

seoSteps.forEach(item => {
    console.log(`\n${item.step}. ${item.task}`);
    console.log(`   📌 ${item.instructions}`);
    if (item.url) {
        console.log(`   🔗 ${item.url}`);
    }
});

console.log("\n✅ SEO Setup Complete!");
console.log("Monitor performance in Google Search Console and Analytics.");
