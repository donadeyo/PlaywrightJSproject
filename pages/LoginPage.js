class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = '#login2';
    this.usernameInput = '#loginusername';
    this.passwordInput = '#loginpassword';
    this.loginButton = 'button[onclick="logIn()"]';
    this.closeButton = page.getByText('Close');
  }

  async fillUsername(username) {
    await this.page.fill(this.usernameInput, username);
  }

  async fillPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async closeLogin() {
    await this.page.click(this.closeButton);
  }

  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}

module.exports = LoginPage;
