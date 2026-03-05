import { test, expect } from '@playwright/test'

test('Learning Locator', async ({ page }) => {

    // Navigating to the WebPage
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Approach 1 : Storing webelement & performing the action on it 
    const nameField = await page.locator('input#name');
    await nameField.fill('Rohsan Ghadge');

    const emailField = await page.locator('//input[@id="email"]');
    await emailField.fill('roshanghadge20@gmail.com');

    // Approach 2 : Directly performing an action 
    await page.click('//input[@id="phone"]');

    // Approach 3 : Fill up value into element with this 
    const addressField = await page.fill('textarea#textarea', 'Nerul Navi Mumbai');
    page.close();

})

test('Learning Locating Multiple Elements', async ({ page }) => {

    // Navigating to the WebPage
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Locating multiple of webelements > Approach 1
    const dropDownOptions = await page.$$('select#country option');
    for (const option of dropDownOptions) {
        console.log('Element of dropdown', option);
    }

    // Locating multiple multiple elements > Approach 2
    const dropdownOptions = await page.locator('select#country option');
    for (const drp_option of dropdownOptions) {
        console.log("Options of dropdown :-", drp_option);
    }

    page.close();
})