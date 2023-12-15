const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000/menu/1";

// Expected constants
const expectedTableHeader = ["Product", "Price", "Quantity", "Total Price"];

test("Check pizza details", async ({ page }) => {
  const title = await page.$('[data-testid="pizza-section-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).not.toBeNull();

  const subTitle = await page.$('[data-testid="pizza-section-desc"]');
  const subTitleText = await subTitle.textContent();
  expect(subTitleText.trim().toLowerCase()).not.toBeNull();

  const price = await page.$('[data-testid="pizza-section-price"]');
  const priceText = await price.textContent();
  expect(priceText.trim().toLowerCase()).not.toBeNull();

  const button = await page.$('[data-testid="pizza-section-button"]');
  const buttonText = await button.textContent();
  expect(buttonText.trim().toLowerCase()).not.toBeNull();
});

test("Check pizza section back link", async ({ page }) => {
  const backLink = await page.$('[data-testid="pizza-section-back"]');
  const backLinkText = await backLink.textContent();
  expect(backLinkText.trim().toLowerCase()).not.toBeNull();
});

test("Check contact form", async ({ page }) => {
  const headerCount = await page
    .locator('[data-testid="pizza-section-tableItem"]')
    .count();
  expect(headerCount).toBe(expectedTableHeader.length);

  const hedaerItems = await page.$$('[data-testid="pizza-section-tableItem"]');
  for (let i = 0; i < hedaerItems.length; i++) {
    const headerItem = hedaerItems[i];
    const text = await headerItem.textContent();
    expect(text.trim().toLowerCase()).toBe(
      expectedTableHeader[i].toLowerCase()
    );
  }
});

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});
