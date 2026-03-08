import { test, expect } from '@playwright/test'

test('Built In Locators', async ({ page }) => {

    // All Built In locators into playwrights 

    await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'load' });

    // by using alt text()
    const element = await page.getByAltText('locator');
    await expect(element).toBeVisible();

    // by using placeholder
    const element1 = await page.getByPlaceholder('locator');
    await expect(element).toBeVisible();

    // by using get by role
    const element2 = await page.getByRole('locator');
    await expect(element).toBeVisible();

    // by using get by text
    const element3 = await page.getByText('locator');
    await expect(element).toBeVisible();

    // by using get by label
    const element4 = await page.getByLabel('locator');
    await expect(element).toBeVisible();

    // by using get by title
    const element5 = await page.getByTitle('locator');
    await expect(element).toBeVisible();

    // by using get by test id
    const element6 = await page.getByTestId('locator');
    await expect(element).toBeVisible();

    await page.close();
})