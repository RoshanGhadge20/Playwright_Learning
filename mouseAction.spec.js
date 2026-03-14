import { test, expect } from '@playwright/test'

test("Handling Mouse Action", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });

    // Hovering mouse over the element 
    const pointMe = await page.locator("//button[text()='Point Me']");
    await pointMe.hover();

    await page.waitForTimeout(4000);
    await page.close();
});

test("Mouse Right Click Operation", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });

    // Performing Right Click Operation
    const copyTextButton = await page.locator("//button[text()='Copy Text']");
    await copyTextButton.click({ button: 'right' });

    await page.waitForTimeout(4000);
    await page.close();

});

test("Mouse Double Click Operation", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });

    // Performing Double Click Operation
    const copyTextButton = await page.locator("//button[text()='Copy Text']");
    await copyTextButton.dblclick();

    const field2 = await page.locator('input#field2');
    await expect(field2.textContent()).toContain("Hello World!");

    await page.waitForTimeout(4000);
    await page.close();

});

test("performing drag and drop operation", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });

    const sourceElement = await page.locator('div#draggable');
    const targetElement = await page.locator('div#droppable');

    /* // Approach 1 : with keyboard action 
    await sourceElement.hover();
    await page.mouse.down();
    await targetElement.hover();
    await page.mouse.up();
 */
    // Approach 2 > Default method which is provided by playwright
    await sourceElement.dragTo(targetElement);


    await page.waitForTimeout(4000);
    await page.close();
});
