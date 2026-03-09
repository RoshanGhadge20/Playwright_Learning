import { test, expect } from '@playwright/test'

test("Handling Alert with OK button", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    });

    const simpleAlert = await page.locator('button#alertBtn');
    simpleAlert.click();
    await page.waitForTimeout(4000);

});


test("Confirmation Dialog", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });

    // Confirmation dialog gets dismiss
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        // await dialog.accept();
        await dialog.dismiss();
    });

    const simpleAlert = await page.locator('button#confirmBtn');
    simpleAlert.click();
    await page.waitForTimeout(4000);

    await expect(page.locator("//p[text()='You pressed OK!']")).toHaveText('You pressed OK!');

});


test("Prompt Dialog", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });

    // Confirmation dialog gets dismiss
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('RoshanGhadge');
    });
    const simpleAlert = await page.locator('button#promptBtn');
    simpleAlert.click();
    await page.waitForTimeout(4000);

    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Harry Potter! How are you today?");
    await page.waitForTimeout(4000);
});