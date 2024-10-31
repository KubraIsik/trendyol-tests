const { I } = inject();

module.exports = {

  // setting locators of the page
  fields: {
    email: '//input [@id= "login-email" ]' ,
    password: '//input [@id= "login-password-input" ]'
  },
  loginButton: '//button [@class="q-primary q-fluid q-button-medium q-button submit" ]',
  warningMessageField: '//span [@class= "message" ]',
  
  // introducing methods
  async getWarningMessage() {
    return messageInField = await I.grabTextFrom(this.warningMessageField);
  },
  
  searchText(message){
    I.seeElement('//*[contains(text(), "'+message+'")]');
  }
}
