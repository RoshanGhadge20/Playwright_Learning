import { test, expect } from '@playwright/test'

test("Checkbox handling", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' });


    // Approach 1 for single check operation
    await page.locator('input#sunday').check();

    // Approach 2 for single check operation
    await page.check('input#monday');

    // Selecting multiple of checkbox 
    const checkBoxLocators = ["input#tuesday", "input#wednesday", "input#thursday"];
    for (const element of checkBoxLocators) {
        await element.check();
    }
    await page.waitForTimeout(3000);

    // Unchecking the checked checkboxes 
    for (const uncheckElement of checkBoxLocators) {
        await page.locator(uncheckElement).uncheck();
    }
    await page.waitForTimeout(4000);
});