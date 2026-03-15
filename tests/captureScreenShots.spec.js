import { test, expect } from '@playwright/test'

test("Capture visible area screenshot", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });
    await page.screenshot({ path: `screenShots/${Date.now()}_Homepage.png` })
    await page.waitForTimeout(4000);
    await page.close();
});

test("Capture full page screenshot", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });
    await page.screenshot({ path: `screenShots/${Date.now()}_Homepage.png`, fullPage: true })
    await page.waitForTimeout(4000);
    await page.close();
});

test("Capture specific element area screenshot", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });
    await page.locator('#name').screenshot({ path: `screenShots/${Date.now()}_Homepage.png` });
    await page.waitForTimeout(4000);
    await page.close();
});