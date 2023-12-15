const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

// Expected constants

const expectedOGTitle = "Italian Pizza | 3rd Largest Pizza Chain in India";
const expectedOGDescription =
  "Italian Pizza is the 3rd largest Pizza chain in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices.";
const expectedOGURL = "https://italian-pizza-sigma.vercel.app/";
const expectedOGType = "website";
const expectedOGSiteName = "Italian Pizza";
const expectedTwitterTitle = "Italian Pizza | 3rd Largest Pizza Chain in India";
const expectedTwitterDescription =
  "Italian Pizza is the 3rd largest Pizza chain in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices.";
const expectedMetaDescription =
  "Italian Pizza is the 3rd largest Pizza chain in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices.";

test("Test Open Graph and Twitter Meta Tags", async ({ page }) => {
  // Open Graph Meta Tags
  const ogTitleMeta = await page.$('head meta[property="og:title"]');
  expect(ogTitleMeta).not.toBeNull();
  expect(await ogTitleMeta.getAttribute("content")).toBe(expectedOGTitle);

  // Verify Open Graph description meta tag
  const ogDescriptionMeta = await page.$(
    'head meta[property="og:description"]'
  );
  expect(ogDescriptionMeta).not.toBeNull();
  expect(await ogDescriptionMeta.getAttribute("content")).toBe(
    expectedOGDescription
  );

  // Verify Open Graph URL meta tag
  const ogUrlMeta = await page.$('head meta[property="og:url"]');
  expect(ogUrlMeta).not.toBeNull();
  expect(await ogUrlMeta.getAttribute("content")).toBe(expectedOGURL);

  // Verify Open Graph type meta tag
  const ogTypeMeta = await page.$('head meta[property="og:type"]');
  expect(ogTypeMeta).not.toBeNull();
  expect(await ogTypeMeta.getAttribute("content")).toBe(expectedOGType);

  // Verify Open Graph site name meta tag
  const ogSiteNameMeta = await page.$('head meta[property="og:site_name"]');
  expect(ogSiteNameMeta).not.toBeNull();
  expect(await ogSiteNameMeta.getAttribute("content")).toBe(expectedOGSiteName);

  // Twitter Card Meta Tags
  // Verify Twitter title meta tag
  const twitterTitleMeta = await page.$('head meta[name="twitter:title"]');
  expect(twitterTitleMeta).not.toBeNull();
  expect(await twitterTitleMeta.getAttribute("content")).toBe(
    expectedTwitterTitle
  );

  // Verify Twitter description meta tag
  const twitterDescriptionMeta = await page.$(
    'head meta[name="twitter:description"]'
  );
  expect(twitterDescriptionMeta).not.toBeNull();
  expect(await twitterDescriptionMeta.getAttribute("content")).toBe(
    expectedTwitterDescription
  );

});

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});
