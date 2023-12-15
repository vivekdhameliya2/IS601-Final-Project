const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

// Expected constants
const expectedMenuItemCount = 4;
const expectedNavs = ["home", "about", "pizza", "contact us"];

test("Check Navigation Menu in Header", async ({ page }) => {
  // Check nav menu counts
  const menuCount = await page.locator("header nav a").count();
  expect(menuCount).toBe(expectedMenuItemCount);

  // Check nav menu content
  const menuItems = await page.$$(".menu-section .desk-nav ul li");
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    const text = await menuItem.textContent();
    expect(text.trim().toLowerCase()).toBe(expectedNavs[i].toLowerCase());
  }
});

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});
