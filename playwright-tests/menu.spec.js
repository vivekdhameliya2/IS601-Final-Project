const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000/menu";

// Expected constants
const expectedTitle = "Menu";
const expectedFilters = ["pizza", "burger", "fries", "dessert", "beverages"];
const excepectedCartUpdateButtton = "GO TO CART";

test("Check menu section title", async ({ page }) => {
  const title = await page.$('[data-testid="common-banner-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(expectedTitle.toLowerCase());
});

test("Check filter section", async ({ page }) => {
  const filters = await page
    .locator('[data-testid="menu-filter-types"]')
    .count();
  expect(filters).toBe(expectedFilters.length);

  // Check nav menu content
  const filtersItems = await page.$$('[data-testid="menu-filter-types"]');
  for (let i = 0; i < filtersItems.length; i++) {
    const filterItem = filtersItems[i];
    const text = await filterItem.textContent();
    expect(text.trim().toLowerCase()).toBe(expectedFilters[i].toLowerCase());
  }
});

test("Check add to cart usabilty testing", async ({ page }) => {
  // Click the button to open the Mailchimp popup
  await page.click('[data-testid="add-to-cart"]');

  // // Wait for the popup to appear
  await page.waitForSelector('[data-testid="go-to-cart"]');

  const btnText = await page.textContent('[data-testid="go-to-cart"]');
  expect(btnText).toBe(excepectedCartUpdateButtton);
});

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});
