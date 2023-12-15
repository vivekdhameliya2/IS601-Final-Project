const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

// Expected constants
const expectedTitle = "Brijeshkumar suvagiya";
const expectedLogoText = "BRIJESH";
const expectedMenuItemCount = 4;
const expectedHeroTitle = "Passionate Front End developer";
const expectedHeroSubText = "Hello World! I’m";
const expectedAboutTitle = "About Me";
const expectedTestimonialsTitle = "Testimonial";
const expectedTestimonialCount = 4;
const expectedNavs = ["home", "about me", "portfolio", "Contact Me"];
const expectedTestimonialNames = [
  "Teri Dactyl",
  "Teri Dactyl",
  "Teri Dactyl",
  "Teri Dactyl",
];
const expectedFooterLinks = ["home", "about me", "portfolio", "Testimonial"];
const expectedSubmitButtonText = "Submit";

test("Test Basic HTML Structure", async ({ page }) => {
  // Ensure the presence of <head> section
  const headElement = await page.$("head");
  expect(headElement).not.toBeNull();

  // Check for the presence of <title> element
  const titleElement = await page.$("head title");
  expect(titleElement).not.toBeNull();
});

test("Check Page Title", async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test("Check Logo in Header", async ({ page }) => {
  const logoText = (await page.locator(".logo").textContent()).trim();
  expect(logoText).toBe(expectedLogoText);
});

test("Check Navigation Menu in Header", async ({ page }) => {
  // Check nav menu counts
  const menuCount = await page.locator(".menu-section .desk-nav ul li").count();
  expect(menuCount).toBe(expectedMenuItemCount);

  // Check nav menu content
  const menuItems = await page.$$('.menu-section .desk-nav ul li');
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    const text = await menuItem.textContent();
    expect(text.trim().toLowerCase()).toBe(expectedNavs[i].toLowerCase());
  }
});

test("Check Hero Section", async ({ page }) => {
  expect(
    await page.locator(".tagline-section .tagline-info h2").textContent()
  ).toBe(expectedHeroTitle);
  expect(
    await page.locator(".tagline-section .tagline-info span").textContent()
  ).toBe(expectedHeroSubText);
});

test("Check About Section", async ({ page }) => {
  expect(await page.locator(".about .content .title").textContent()).toBe(
    expectedAboutTitle
  );
});

test("Check Testimonials Section title", async ({ page }) => {
  // Check testimonial section title
  expect(await page.locator(".newslatter .title").textContent()).toBe(
    expectedTestimonialsTitle
  );
});

test("Check Footer", async ({ page }) => {
  // Check footer counts
  const footerLinkscount = await page
    .locator(".social-section nav ul li")
    .count();
  expect(footerLinkscount).toBeGreaterThan(0);

  // Check footer links
  
  const footerLinks = await page.$$('.social-section nav ul li');
  
  for (let i = 0; i < footerLinks.length; i++) {
    const footerLinkItem = footerLinks[i];
    const text = await footerLinkItem.textContent();
    expect(text.trim().toLowerCase()).toBe(
      expectedFooterLinks[i].toLowerCase()
    );
  }
});

test("Check Newsletter Form Elements", async ({ page }) => {
  const newsletterForm = await page.locator(".email-wrapper form");
  const inputField = await newsletterForm.locator('input[type="email"]');
  const submitButton = await newsletterForm.locator('button[type="submit"]');
  expect(await inputField.isVisible()).toBe(true);
  expect(await submitButton.isVisible()).toBe(true);
  expect(await submitButton.getAttribute("value")).toBe(
    expectedSubmitButtonText
  );
});

test("Check All Navigation Links", async ({ page }) => {
  const navLinks = await page.locator(".menu-section .desk-nav ul li");
  const count = await navLinks.count();

  for (let i = 0; i < count; i++) {
    const link = navLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});

test("Check All Testimonials count", async ({ page }) => {
  const testimonials = await page.locator(
    ".newslatter-wrapper .newslatter-card-layout"
  );

  const count = await testimonials.count();

  // Check testimonials count
  expect(count).toBe(expectedTestimonialCount);
});

test("Check All Testimonials content", async ({ page }) => {
  for (let i = 1; i < 4; i++) {
    const h3Selector = `.newslatter-wrapper .newslatter-card-layout:nth-child(${i}) .newslatter-card .newslatter-content h3`;
    const h3 = await page.$(h3Selector);
    const text = await h3.textContent();

    expect(text.trim().toLowerCase()).toBe(
      expectedTestimonialNames[i].toLowerCase()
    );
  }
});

test("Check All Footer Links", async ({ page }) => {
  const footerLinks = await page.locator(".social-section nav ul");
  const count = await footerLinks.count();

  for (let i = 0; i < count; i++) {
    const link = footerLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});
