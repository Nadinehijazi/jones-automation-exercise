# Jones Automation Exercise

Playwright automation for https://test.netlify.app/

## What it does
1. Fills the Name, Email, Phone, Company and Website fields
2. Changes Number of Employees from 1-10 to 51-500 (bonus)
3. Saves a screenshot before submitting (`before-submit.png`)
4. Clicks "Request a call back"
5. Logs to the console when the thank-you page is reached

## Requirements
- Node.js

## How to run
```bash
npm install
npx playwright install chromium
npm start
```

## Notes
- The browser runs in headed mode (`headless: false`) so the flow is visible.
- The thank-you page is detected by waiting for the URL to contain `thank-you`.
- Focus is removed from the last field before the screenshot, so the label animation doesn't cover the text.

## Additional observations
- The form submits using GET, so all personal data (name, email, phone)
  appears in the thank-you page URL. URLs are stored in browser history,
  server logs and analytics tools, which is a privacy risk.
  Recommendation: submit the form using POST instead.