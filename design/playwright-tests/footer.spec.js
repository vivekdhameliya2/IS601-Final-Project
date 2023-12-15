const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

// Expected constants
const expectedMenuItemCount = 9;
const expectedNavs = [
  "home",
  "about",
  "menu",
  "contact us",
  "facebook",
  "linked in",
  "youtube",
  "instagram",
  "twitter",
];

test("Check Navigation Menu in footer", async ({ page }) => {
  // Check nav menu counts
  const menuCount = await page.locator("footer div div div a").count();
  expect(menuCount).toBe(expectedMenuItemCount);

  // Check nav menu content
  const menuItems = await page.$$("footer div div div a");
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    const text = await menuItem.textContent();
    expect(text.trim().toLowerCase()).toBe(expectedNavs[i].toLowerCase());
  }
});

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});