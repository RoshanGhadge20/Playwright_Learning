import { test, expect } from '@playwright/test'

test("Working with Calender Controls", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'load' });

    // With the help of sendkeys method 
    await page.fill("input#datepicker", "11/20/2026");

    // Manually Selecting the date from calender 
    const calenderField = await page.locator('input#datepicker');
    const month = 'March';
    const year = '2026';
    const date = '25';

    await calenderField.click();
    while (true) {
        const currentYear = await page.locator('span.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('span.ui-datepicker-month').textContent();
        const nextButton = await page.locator('span.ui-icon-circle-triangle-e');
        if (currentMonth == month && currentYear == year) {
            break;
        }
        await nextButton.click();

        /*  // Date selection with the help of loops 
            const dates = await page.$$('table.ui-datepicker-calendar tbody tr td');
            for (const dt of dates) {
                if (await dt.textContent() == date) {
                    await dt.click();
                    break;
                }
            } */

        // Parameterized value into the xpath 
        const dateField = await page.locator("//a[@class='ui - state -default '][text()='${ date }']");
        await dateField.click();

    }


    await page.waitForTimeout(4000);
    await page.close();
});