const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('https://test.netlify.app/');

    // 1. Fill the fields
    await page.fill('#name', 'Nadine Hijazi');
    await page.fill('#email', 'nadine@example.com');
    await page.fill('#phone', '0501234567');
    await page.fill('#company', 'Jones');
    await page.fill('#website', 'https://getjones.com');

    // 2. Bonus: change Number of Employees
    await page.selectOption('#employees', '51-500');
    
    await page.locator('#website').blur(); // remove focus so the label animation settles

    // 3. Screenshot before clicking
    await page.screenshot({ path: 'before-submit.png', fullPage: true });

    // 4. Click the button
    await page.click('button:has-text("Request a call back")');

    // 5. Wait for the thank-you page and log
    await page.waitForURL('**/thank-you*');
    console.log('Reached the thank you page:', page.url());
  } catch (err) {
    console.error('Automation failed:', err.message);
  } finally {
    await browser.close();
  }
})();