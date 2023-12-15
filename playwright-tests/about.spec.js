const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000/about";

// Expected constants
const expectedTitle = "About Us";
const expectedStorySubTitle = "OUR STORY";
const expectedStoryTitle = "The Story About Italian Pizza";
const expectedTeamSubTitle = "MEET OUR TEAM";
const expectedTeamTitle = "Chef’s Team";
const expectedServiceSubTitle = "ENJOY AN EXCEPTIONAL JOURNEY OF TASTE";
const expectedServiceTitle = "SPECIAL MENU";
const expectedServices = [
  "Fresh Food",
  "The best",
  "24/7 Service",
  "The highest quality",
];
const viewAllUrl = "http://localhost:3000/menu";

test("Check about section title", async ({ page }) => {
  const title = await page.$('[data-testid="common-banner-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(expectedTitle.toLowerCase());
});

test("Check story section", async ({ page }) => {
  const subTitle = await page.$('[data-testid="our-story-subtitle"]');
  const subTitleText = await subTitle.textContent();
  expect(subTitleText.trim().toLowerCase()).toBe(
    expectedStorySubTitle.toLowerCase()
  );

  const title = await page.$('[data-testid="our-story-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(expectedStoryTitle.toLowerCase());
});

test("Check team section", async ({ page }) => {
  const subTitle = await page.$('[data-testid="our-team-subtitle"]');
  const subTitleText = await subTitle.textContent();
  expect(subTitleText.trim().toLowerCase()).toBe(
    expectedTeamSubTitle.toLowerCase()
  );

  const title = await page.$('[data-testid="our-team-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(expectedTeamTitle.toLowerCase());
});

test("Check service v2 section", async ({ page }) => {
  const subTitle = await page.$('[data-testid="our-servicev2-subtitle"]');
  const subTitleText = await subTitle.textContent();
  expect(subTitleText.trim().toLowerCase()).toBe(
    expectedServiceSubTitle.toLowerCase()
  );

  const title = await page.$('[data-testid="our-servicev2-title"]');
  const titleText = await title.textContent();
  expect(titleText.trim().toLowerCase()).toBe(
    expectedServiceTitle.toLowerCase()
  );

  const services = await page
    .locator('[data-testid="our-servicev2-services"]')
    .count();
  expect(services).toBe(expectedServices.length);

  const servicesItems = await page.$$('[data-testid="our-servicev2-services"]');
  for (let i = 0; i < servicesItems.length; i++) {
    const serviceItem = servicesItems[i];
    const text = await serviceItem.textContent();
    expect(text.trim().toLowerCase()).toBe(expectedServices[i].toLowerCase());
  }
});

test("Check view all redirect", async ({ page }) => {
  await page.getByTestId("our-servicev2-button").click();
  await page.waitForURL(viewAllUrl);
  const finalUrl = page.url();
  expect(finalUrl).toBe(viewAllUrl);
});

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});
