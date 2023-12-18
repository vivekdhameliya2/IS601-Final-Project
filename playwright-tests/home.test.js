const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

// Expected constants
const expectedSubTitle = "Todays Best Deals";
const expectedDiscount = "50%";
const expectedBtnText = "SIGNUP";
const expectedSpecialMenuTitle = "From Italy Pizza, With Love";
const expectedSpecialMenuSubTitle = "SPECIAL MENU";
const testimonialTitle = "What Customer Say Us";
const testmonialSubTitle = "OUR TESTIMONIAL";
const deliveryTitle = "Your Favorite Pizza, On The Way!";
const deliverySubTitle = "FASTEST DELIVERY";
const viewAllUrl = "http://localhost:3000/menu";

test("Check hero section", async ({ page }) => {
  const subTitle = await page.$('[data-testid="hero-section-subtitle"]');
  const subTitleText = await subTitle.textContent();
  expect(subTitleText.trim().toLowerCase()).toBe(
    expectedSubTitle.toLowerCase()
  );

  const discount = await page.$('[data-testid="hero-section-discount"]');
  const discountText = await discount.textContent();
  expect(discountText.trim().toLowerCase()).toBe(
    expectedDiscount.toLowerCase()
  );

  const btn = await page.$('[data-testid="hero-section-button"]');
  const btnText = await btn.textContent();
  expect(btnText.trim().toLowerCase()).toBe(expectedBtnText.toLowerCase());
});

test("Check special menu section", async ({ page }) => {
  const subTitle = await page.$('[data-testid="special-menu-subtitle"]');
  const subTitleText = await subTitle.textContent();
  expect(subTitleText.trim().toLowerCase()).toBe(
    expectedSpecialMenuSubTitle.toLowerCase()
  );

  const title = await page.$('[data-testid="special-menu-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(
    expectedSpecialMenuTitle.toLowerCase()
  );
});

test("Check testimonial section", async ({ page }) => {
  const subTitle = await page.$('[data-testid="testimonial-section-subtitle"]');
  const subTitleText = await subTitle.textContent();
  expect(subTitleText.trim().toLowerCase()).toBe(
    testmonialSubTitle.toLowerCase()
  );

  const title = await page.$('[data-testid="testimonial-section-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(testimonialTitle.toLowerCase());
});

test("Check delivery section", async ({ page }) => {
  const subTitle = await page.$('[data-testid="delivery-section-subtitle"]');
  const subTitleText = await subTitle.textContent();
  expect(subTitleText.trim().toLowerCase()).toBe(
    deliverySubTitle.toLowerCase()
  );

  const title = await page.$('[data-testid="delivery-section-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(deliveryTitle.toLowerCase());
});

test("Check view all redirect", async ({ page }) => {
  await page.getByTestId("viewall-link").click();
  await page.waitForURL(viewAllUrl);
  const finalUrl = page.url();
  expect(finalUrl).toBe(viewAllUrl);
});

test("Check mailchimp usabilty", async ({ page }) => {
  // Click the button to open the Mailchimp popup
  await page.click('[data-testid="hero-section-button"]');

  // Wait for the popup to appear
  await page.waitForSelector('[data-testid="mailchimp-popup"]');

  // Fill the email input field
  const input = await page.$('input[name="mailchimp-email-input"]');
  input.fill("brijesh12@gmail.com");

  // Click on the submit button
  await page.click('[data-testid="mailchimp-submit-button"]');
});

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});
