const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const SignupPage = require('../pages/SignupPage');
const credentials = require('../utils/credentials.json');

  let homePage;
  let signupPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signupPage = new SignupPage(page);
    await homePage.goto();
  });

  test('Verify Click Signup', async ({ page }) => {
    await homePage.clickSignup();
    await expect(page.locator(signupPage.usernameInput)).toBeVisible();
  });

  test('verify successful signup', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.message()).toMatch(/Sign up successful/i);
      await dialog.accept();
    });
    await homePage.clickSignup();
    await signupPage.signup(credentials.username, credentials.password);
  });
    test.only('verify close signup', async ({ page }) => {
    await homePage.clickSignup();
    await signupPage.fillUsername(credentials.username);
    await signupPage.fillPassword(credentials.password);
    await signupPage.closeSignup();
    await expect(page.locator(signupPage.usernameInput)).not.toBeVisible();
    })
;