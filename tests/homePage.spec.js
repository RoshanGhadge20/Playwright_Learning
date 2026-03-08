import { test, expect } from '@playwright/test'

// Test to verify page title 
test('Verify Page Title', async ({ page }) => {
    page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });
    const pageTitle = await page.title();
    console.log("Page Title", pageTitle);
    await expect(page).toHaveTitle('Automation Testing Practice');
})