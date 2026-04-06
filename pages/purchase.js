class Purchase {
  constructor(page) {
    this.page = page;
    this.placeOrderButton = 'button:has-text("Place Order")';
    this.nameField = '#name';
    this.countryField = '#country';
    this.cityField = '#city';
    this.cardField = '#card';
    this.monthField = '#month';
    this.yearField = '#year';
    this.purchaseButton = 'button:has-text("Purchase")';
    this.closeButton = 'button:has-text("Close")';
  }

  async clickPlaceOrder() {
    await this.page.click(this.placeOrderButton);
  }

  async fillPurchaseForm(name, country, city, card, month, year) {
    await this.page.fill(this.nameField, name);
    await this.page.fill(this.countryField, country);
    await this.page.fill(this.cityField, city);
    await this.page.fill(this.cardField, card);
    await this.page.fill(this.monthField, month);
    await this.page.fill(this.yearField, year);
  }

  async clickPurchase() {
    await this.page.click(this.purchaseButton);
  }

  async clickClose() {
    await this.page.click(this.closeButton);
  }
}

module.exports = Purchase;
