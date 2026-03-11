import { test, expect } from '@playwright/test'

test("Handling Frames", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });

    // Fetching all frames from the page
    const allFrames = await page.frames();
    console.log("All Frames :- ", allFrames.length);

    // Handling Frames > Approach 1 with frame Name
    const frame = await page.frame('Name of Frame');


    // Handling Frames > Approach 1 with frame URL
    const frame2 = await page.frame({ url: 'URL of Frame' });
    await frame2.fill("Locator of Element", 'Dummy Text to be filled');

    // Handling Frames > With Frame Locators
    const frame3 = page.frameLocator('Frame locator').locator('Locator of element');
    frame3.fill('Roshan Ghadge');

    await page.waitForTimeout(4000);
    await page.close();


});
