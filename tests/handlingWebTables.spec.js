import { test, expect } from '@playwright/test'

test("Fetching WebTables Data", async ({ page }) => {
    await page.goto("", { waitUntil: 'load' });


    await page.waitForTimeout(4000);
    await page.close();
});