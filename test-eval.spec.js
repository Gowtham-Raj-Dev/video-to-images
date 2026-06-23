import { test, expect } from '@playwright/test';
import path from 'path';

test('upload image and get logs', async ({ page }) => {
  const logs = [];
  page.on('console', msg => {
    logs.push(msg.text());
    console.log(`BROWSER LOG: ${msg.text()}`);
  });

  // Try 3000
  try {
    await page.goto('http://localhost:3000');
  } catch (e) {
    console.log('Port 3000 failed, trying 3001...');
    await page.goto('http://localhost:3001');
  }

  // Ensure we are on the image tool page
  const pageText = await page.content();
  if (!pageText.includes('Watermark Remover')) {
    console.log('Not on the right page, navigating to /image');
    await page.goto(page.url().replace(/\/$/, '') + '/image');
  }

  // Find file input and upload
  const fileInput = await page.$('input[type="file"]');
  if (fileInput) {
    console.log('Found file input, uploading...');
    await fileInput.setInputFiles('C:\\Users\\gowth\\.gemini\\antigravity\\brain\\916307e3-7a29-4b0e-9fa3-d2c9711528aa\\media__1782194992894.jpg');
    
    // Wait for processing to complete or fail
    await page.waitForTimeout(10000); // 10 seconds should be enough
  } else {
    console.log('Could not find file input!');
  }
  
  console.log('Finished capturing logs.');
});
