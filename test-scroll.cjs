const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runTests() {
  console.log('🚀 Starting Automated Visual & Motion Quality Audit...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const errors = [];
  const warnings = [];

  try {
    // ----------------------------------------------------
    // TEST 1: DESKTOP AUDIT (1920x1080)
    // ----------------------------------------------------
    console.log('\n[1/3] Testing Desktop Viewport (1920x1080)...');
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

    page.on('console', (msg) => {
      const type = msg.type();
      const text = msg.text();
      if (type === 'error') {
        errors.push(`Console Error: ${text}`);
      } else if (type === 'warning') {
        warnings.push(`Console Warning: ${text}`);
      }
    });

    page.on('pageerror', (err) => {
      errors.push(`Page Error: ${err.message}`);
    });

    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    console.log('✓ Page loaded.');

    // Wait 3.5s for intro animation and counter tween to finish
    await new Promise((r) => setTimeout(r, 3600));

    // Verify counter DOM values
    const statValues = await page.evaluate(() => {
      const els = document.querySelectorAll('.stat-number');
      return Array.from(els).map((el) => el.textContent.trim());
    });
    console.log('✓ Counter values at intro completion:', statValues);

    // Save desktop initial state screenshot
    const shot1 = path.join(OUTPUT_DIR, '01-hero-desktop-initial.png');
    await page.screenshot({ path: shot1 });
    console.log(`✓ Saved ${shot1}`);

    // Scroll 800px (mid scrub)
    await page.evaluate(() => window.scrollTo({ top: 800, behavior: 'instant' }));
    await new Promise((r) => setTimeout(r, 1200));
    const shot2 = path.join(OUTPUT_DIR, '02-hero-desktop-scrolled-mid.png');
    await page.screenshot({ path: shot2 });
    console.log(`✓ Saved ${shot2}`);

    // Scroll 1600px (deep scrub)
    await page.evaluate(() => window.scrollTo({ top: 1600, behavior: 'instant' }));
    await new Promise((r) => setTimeout(r, 1200));
    const shot3 = path.join(OUTPUT_DIR, '03-hero-desktop-scrolled-deep.png');
    await page.screenshot({ path: shot3 });
    console.log(`✓ Saved ${shot3}`);

    // Scroll to filler section
    await page.evaluate(() => window.scrollTo({ top: 3200, behavior: 'instant' }));
    await new Promise((r) => setTimeout(r, 1200));
    const shot4 = path.join(OUTPUT_DIR, '04-filler-sections-desktop.png');
    await page.screenshot({ path: shot4 });
    console.log(`✓ Saved ${shot4}`);

    // Reverse scroll back to top
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await new Promise((r) => setTimeout(r, 1200));
    const shot5 = path.join(OUTPUT_DIR, '05-hero-desktop-reversed-top.png');
    await page.screenshot({ path: shot5 });
    console.log(`✓ Saved ${shot5}`);

    await page.close();

    // ----------------------------------------------------
    // TEST 2: MOBILE AUDIT (390x844 - iPhone 14/15)
    // ----------------------------------------------------
    console.log('\n[2/3] Testing Mobile Viewport (390x844)...');
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await mobilePage.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    await new Promise((r) => setTimeout(r, 3600));
    const mobileShot1 = path.join(OUTPUT_DIR, '06-hero-mobile-initial.png');
    await mobilePage.screenshot({ path: mobileShot1 });
    console.log(`✓ Saved ${mobileShot1}`);

    // Mobile scroll
    await mobilePage.evaluate(() => window.scrollTo({ top: 600, behavior: 'instant' }));
    await new Promise((r) => setTimeout(r, 1200));
    const mobileShot2 = path.join(OUTPUT_DIR, '07-hero-mobile-scrolled.png');
    await mobilePage.screenshot({ path: mobileShot2 });
    console.log(`✓ Saved ${mobileShot2}`);

    await mobilePage.close();

    // ----------------------------------------------------
    // TEST 3: TABLET AUDIT (768x1024 - iPad)
    // ----------------------------------------------------
    console.log('\n[3/3] Testing Tablet Viewport (768x1024)...');
    const tabletPage = await browser.newPage();
    await tabletPage.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
    await tabletPage.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    await new Promise((r) => setTimeout(r, 3600));
    const tabletShot = path.join(OUTPUT_DIR, '08-hero-tablet-initial.png');
    await tabletPage.screenshot({ path: tabletShot });
    console.log(`✓ Saved ${tabletShot}`);

    await tabletPage.close();

    console.log('\n========================================');
    console.log('AUDIT SUMMARY');
    console.log('========================================');
    console.log(`Total Errors: ${errors.length}`);
    if (errors.length > 0) {
      errors.forEach((e) => console.error('  ✕', e));
    } else {
      console.log('✓ Zero console or page errors detected.');
    }
    console.log(`Total Warnings: ${warnings.length}`);
    if (warnings.length > 0) {
      warnings.forEach((w) => console.warn('  ⚠', w));
    }
    console.log('✓ All visual snapshots rendered successfully.');
  } finally {
    await browser.close();
  }
}

runTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
