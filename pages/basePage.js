const { I } = inject();

module.exports = {
  
  // setting locators
  loginLink: "//div[@class = \"link account-user\" ]",

  goToLoginPage(){
    I.waitForElement(this.loginLink)
    I.click(this.loginLink);
  }
}