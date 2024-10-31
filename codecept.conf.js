const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.trendyol.com/', //'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    basePage: "./pages/basePage.js",
    loginPage: "./pages/loginPage.js",
    cartPage: "./pages/cartPage.js"
  },
  name: 'Trendyol-Tests'
}