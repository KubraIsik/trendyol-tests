Feature("login");
const { I, basePage, loginPage } = inject();
const assert = require('assert');

Scenario('Invalid User name(e-mail) and Password @testcase1', ({ I , basePage, loginPage }) => {
    I.amOnPage('/');
    //pause();// after test run, running stop and wait to enter for next step or add new steps avaiable
    basePage.goToLoginPage()
    
    I.login('mail','password')
    //let warningMessage = loginPage.getWarningMessage();
    //console.log(warningMessage)
    //assert.equal("Lütfen geçerli bir e-posta adresi giriniz.", warningMessage)
    //I.seeElement('//*[contains(text(), "Lütfen geçerli bir e-posta adresi giriniz.")]');
    //span [@class ="message" ]
    loginPage.searchText("Lütfen geçerli bir e-posta adresi giriniz.")
});

Scenario('Valid User name and Invalid Password @testcase2', ({ I }) => {
    I.amOnPage('/');
    basePage.goToLoginPage()

    I.login('kuisik@gmail.com', 'passsss')

    loginPage.searchText("E-posta adresiniz ve/veya şifreniz hatalı.")
});