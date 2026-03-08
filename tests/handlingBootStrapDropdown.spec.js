import { test, expect } from '@playwright/test'

test("Handling Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/", {
        waitUntil: 'load'
    });


    // Fetching the dropdown option and iterating throgh it
    const dropDownOption = await page.$$('select#animals');
    for (const option of dropDownOption) {
        let text = await option.textContent();
        console.log("Text Option :- ", text);
    }

});