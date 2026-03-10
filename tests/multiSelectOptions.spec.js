import { test, expect } from "@playwright/test";

test("MultiSelect Dropdown Options", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/", {
        waitUntil: "load",
    });

    // Selecting the options from dropdown
    await page.selectOption("select#colors", ["Blue", "Yellow"]);

    // Assertions with default method
    const options = await page.locator("select#colors options");
    expect(options).toHaveCount(5);

    // With the help of array elements
    const option = await page.$$("select#colors options");
    expect(option.length).toBe(5);

    // Presence of Option in dropdown
    const content = await page.locator("select#colors").textContent();
    await expect(content.includes("Black")).toBeTruthy();

    await page.waitForTimeout(4000);
    await page.close();
});
