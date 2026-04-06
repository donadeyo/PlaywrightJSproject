const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const credentials = require('../utils/credentials.json');
const invalidparameters = require('../utils/invalidparameters.json');

let homePage;
let loginPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await homePage.goto();
});

test(`verify successful login with Valid credentials `, async ({ page }) => {

  await homePage.clickLogin();
  await loginPage.login(credentials.username, credentials.password);
});

for (const data of invalidparameters) {
test(`Verify Invalid login with${data.username}, ${data.password}`, async ({ page }) => {
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain(data.expectedMessage);
    await dialog.accept();
  });
  await homePage.clickLogin();
  await loginPage.login(data.username, data.password);
});}
