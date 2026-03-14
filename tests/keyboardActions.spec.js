import { test, expect } from '@playwright/test'

test("Handling Keyboard Actions", async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare", { waitUntil: 'load' });

    const sourceArea = await page.locator("textarea[name='text1']");
    const targetArea = await page.locator("textarea[name='text2']");

    await sourceArea.fill("Roshan Ghadge");

    // From Keyboard press Ctr+A > Ctr+C
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");

    // Press Tab Button 
    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

    // Pasting the copied text
    await page.keyboard.press("Control+V")


    await page.waitForTimeout(4000);
    await page.close();
});