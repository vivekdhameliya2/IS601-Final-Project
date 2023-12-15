const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000/contact";

// Expected constants
const expectedTitle = "Contact Us";
const expectedFormTitle =
  "Feel free to contact us. We'll be glad to hear from you, buddy.";
const expectedFormButton = "Submit Now";
const expectedItems = 4;

test("Check contact section title", async ({ page }) => {
  const title = await page.$('[data-testid="common-banner-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(expectedTitle.toLowerCase());
});

test("Check contact form", async ({ page }) => {
  const title = await page.$('[data-testid="contact-form-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(expectedFormTitle.toLowerCase());

  const button = await page.$('[data-testid="contact-form-button"]');
  const buttonText = await button.textContent();
  expect(buttonText.trim().toLowerCase()).toBe(
    expectedFormButton.toLowerCase()
  );

  const formItemCount = await page
    .locator('[data-testid="contact-form-item"]')
    .count();
  expect(formItemCount).toBe(expectedItems);
});

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});
