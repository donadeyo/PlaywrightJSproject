const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const PhonePage = require('../pages/phonepage');
const credentials = require('../utils/credentials.json');

let homePage;
let loginPage;
let productPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  productPage = new PhonePage(page);
  await homePage.goto();
});

test('Add Samsung Galaxy S6 to cart', async ({ page }) => {
  await homePage.clickLogin();
  await loginPage.login(credentials.username, credentials.password);

  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();
  });

  await productPage.navigateToPhones();
  await productPage.selectSamsungGalaxy();
  await productPage.addToCart();

  await homePage.goToCart();
  await expect(page.locator('text=Samsung galaxy s6')).toBeVisible();
  await homePage.removeFromCart();
  await expect(page.locator('text=Samsung galaxy s6')).not.toBeVisible();
});