// in this file you can append custom step methods to 'I' object
const { loginPage } = inject();
module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login: function(email, password) {
      this.fillField(loginPage.fields.email, email);
      this.fillField(loginPage.fields.password, password);
      this.click(loginPage.loginButton);
    }
  });
}