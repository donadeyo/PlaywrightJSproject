class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLink = '#signin2';
    this.loginLink = '#login2';
    this.cartLink = page.locator('#cartur');
    this.deleteButton = page.getByRole('link', { name: 'Delete' });
    this.totalPrice = '#totalp';
  }

  async goto() {
    await this.page.goto('https://demoblaze.com/');
  }

  async clickSignup() {
    await this.page.click(this.signupLink);
  }

  async clickLogin() {
    await this.page.click(this.loginLink);
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async getTotalPrice() {
    await this.page.waitForSelector(this.totalPrice);
    return await this.page.textContent(this.totalPrice);
  }

  async removeFromCart() {
    await this.deleteButton.click();
  }
}

module.exports = HomePage;