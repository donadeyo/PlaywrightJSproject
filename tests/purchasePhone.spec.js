const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const PhonePage = require('../pages/phonepage');
const Purchase = require('../pages/purchase');
const credentials = require('../utils/credentials.json');
const address = require('../utils/address.json');

let homePage;
let loginPage;
let phonePage;
let purchase;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  phonePage = new PhonePage(page);
  purchase = new Purchase(page);
  await homePage.goto();
});

test('Purchase Samsung Galaxy S6', async ({ page }) => {
  await homePage.clickLogin();
  await loginPage.login(credentials.username, credentials.password);
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();
  });

  await phonePage.navigateToPhones();
  await phonePage.selectSamsungGalaxy();
  await page.pause();
  await phonePage.addToCart();

  await homePage.goToCart();
  await page.pause();
  await expect(page.locator('text=Samsung galaxy s6')).toBeVisible();

  await purchase.clickPlaceOrder();

  // Fill purchase form using data from address.json
  await purchase.fillPurchaseForm(address.name, address.country, address.city, address.card, address.month, address.year);
  page.once('dialog', async dialog => {
    const message = dialog.message();
    expect(message).toContain('Thank you for your purchase');
    expect(message).toContain(address.name);
    expect(message).toContain(address.country);
    expect(message).toContain(address.city);
    expect(message).toContain(address.card);
    expect(message).toContain(address.month);
    expect(message).toContain(address.year);
    await dialog.accept();
  });
});
