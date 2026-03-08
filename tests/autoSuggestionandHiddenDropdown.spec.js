import { test, expect } from '@playwright/test'

test("Handling autoSuggestion and HiddenElements of Dropdown", async ({ page }) => {
    await page.goto("https://www.redbus.in/", { waitUntil: 'load' });

    const fromLocation = await page.locator(".inputWrapper___b1661e>label[for='srcinput']");
    await fromLocation.fill("Delhi");
    const options = await page.$$("div[role='option']");
    for (let option of options) {
        let text = option.textContent();
        console.log("Text option ", text);
        if (text.includes("Mumbai")) {
            await option.click();
        }
    }
});