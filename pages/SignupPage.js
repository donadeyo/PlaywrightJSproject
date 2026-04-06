class SignupPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#sign-username'; 
    this.passwordInput = '#sign-password'; 
    this.signupButton = 'button[onclick="register()"]'; 
    //this.closeButton = page.getByText("Close");
    this.closeButton = '(//button[@data-dismiss="modal"])[4]'
  }

  async fillUsername(username) {
    await this.page.fill(this.usernameInput, username);
  }

  async fillPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickSignup() {
    await this.page.click(this.signupButton);
  }
  async closeSignup(){
    await this.page.click(this.closeButton);
  }

  async signup(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickSignup();
  }
  async close() {
    await this.closeSignup();
  }
}

module.exports = SignupPage;