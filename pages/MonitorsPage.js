class MonitorsPage {
  constructor(page) {
    this.page = page;
    this.monitorsLink = page.getByRole('link', { name: 'Monitors' });
    this.appleMonitorLink = page.getByRole('link', { name: 'Apple monitor' });
    this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
    this.productTitle = 'h2';
  }

  async navigateToMonitors() {
    await this.monitorsLink.click();
  }

  async selectAppleMonitor() {
    await this.appleMonitorLink.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async getProductTitle() {
    return await this.page.textContent(this.productTitle);
  }
}

module.exports = MonitorsPage;
