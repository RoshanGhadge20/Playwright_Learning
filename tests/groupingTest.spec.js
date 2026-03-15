import { test, expect } from '@playwright/test'

test.describe("Group 1 Describe Method", () => {
    test("Test 1", async ({ page }) => {
        console.log("Printing from Test 1");
    });

    test("Test 2", async ({ page }) => {
        console.log("Printing from Test 2");
    });
});


test.describe("Group 2 Describe Method", () => {
    test("Test 3", async ({ page }) => {
        console.log("Printing from Test 3");
    });

    test("Test 4", async ({ page }) => {
        console.log("Printing from Test 4");
    });
});


test("Test 5", async ({ page }) => {
    console.log("Printing from Test 5");
});


test.beforeAll(() => {
    console.log("Calling from before all hook...")
});
test.beforeEach(() => {
    console.log("Calling from before Each hook...")
});
test.afterEach(() => {
    console.log("Calling from After each hook...")
});
test.afterAll(() => {
    console.log("Calling from After all hook...")
});
