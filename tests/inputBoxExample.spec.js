import { test, expect } from '@playwright/test'

test("Working with input box", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'label' });

    const inputBox = await page.locator('input#name');

    // Approach 1 > directly passing value 
    await inputBox.fill('Roshan Ghadge');

    // Approach 2 > with locators 
    await page.locator('input#name').fill('Roshan');

    // Assertions to verify few conditions on page
    await page.locator('input#email').isVisible();
    await page.locator('input#email').isEnabled();
    await page.locator('input#email').isEditable();

    await page.waitForTimeout(4000);
    await page.close();
});

test("Working with radio buttons", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' });
    const maleRadioButton = await page.locator('#male');

    // Performing the check operation
    await maleRadioButton.check();
    // Asserting its checked or not 
    await expect(maleRadioButton.isChecked()).toBeTruthy();

    await page.waitForTimeout(4000);
    await page.close();
})