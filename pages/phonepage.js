class PhonePage {
  constructor(page) {
    this.page = page;
    this.phonesLink = page.getByRole('link', { name: 'Phones' });
    this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
    this.samsungGalaxyS6Link = page.getByRole('link', { name: 'Samsung galaxy s6' });
    this.productTitle = 'h2';
  }

  async navigateToPhones() {
    await this.phonesLink.click();
  }

  async selectSamsungGalaxy() {
    await this.samsungGalaxyS6Link.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async getProductTitle() {
    return await this.page.textContent(this.productTitle);
  }
}

module.exports = PhonePage;
