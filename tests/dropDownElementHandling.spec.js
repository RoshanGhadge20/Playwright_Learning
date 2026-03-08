import { test, expect } from '@playwright/test'
import { waitForDebugger } from 'node:inspector';
test("DropDown Handling", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/', {
        waitUntil: 'load'
    });

    // Approach 1 > with selecting the option with default options 
    await page.locator('select#country').selectOption({ label: 'India' });
    await page.locator('select#country').selectOption({ value: 'usa' });
    await page.locator('select#country').selectOption('Germany');
    await page.locator('select#country').selectOption({ index: 2 });

    // Approach 2 > Directly we can call selectoption()
    await page.selectOption('select#country', 'Japan');

    // Assertions on dropdown Options 
    const options = await page.$$('#country option');
    await expect(options).toHaveCount(10);

    // Assertion in form of array 
    await expect(options.length).toBe(10);

    // Check presence of value in dropdown with default methods
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy();

    // with looping statements 
    const optionElement = page.$$('#country option');

    for (const opt of optionElement) {
        // console.log("Element :- ", opt.textContent());
        let value = await opt.textContent();
        if (value.includes('France')) {
            await opt.click();
            break;
        }
    }

    await page.waitForTimeout(2000);
    await page.close();


});