# CodeceptJS & Selenium UI Test Project

This project is a **CodeceptJS** https://codecept.io/ end-to-end (E2E) test suite designed for testing e-commerce website [Trendyol](https://www.trendyol.com/) using **Selenium WebDriver**. 
It provides an automated way to validate user flows and interactions on the web application. 

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Contact](#contact)

---

## Prerequisites

1. **Node.js**: Required to run the project and install dependencies.
   - [Download Node.js](https://nodejs.org/)

## Installation

1. **Clone the Repository**:

   Clone the project to your local machine and navigate to the project directory.

   ```
   git clone https://github.com/KubraIsik/trendyol-tests.git
   cd trendyol-tests
   ```
   
2. **Install Dependencies**:

    - Install all dependencies specified in package.json:
    ```
    npm install -d
    ```
    - Install selenium standalone server:
    ```
    npx selenium-standalone install
    ```
    
## Project Structure
Here's an overview of the project structure:

```
food-order-app-tests
│
├── README.md
├── .gitignore
├── codecept.conf.js : The main configuration file for CodeceptJS. Defines test settings, helpers, and WebDriver configurations.
├── jsconfig.json
├── package.json : Lists all project dependencies and scripts for easy execution.
├── steps_file.js
│── pages : Web pages test will be applied on, each file include locators and methods per each web page.
│ ├── basePage.js
│ ├── cartPage.js
│ ├── loginPage.js
│ └── ...
└── tests : Contains all test files.
  ├── login_test.js
  └── ...
```

## Configuration

1. **CodeceptJS Configuration (codecept.conf.js)**:
The codecept.conf.js file is pre-configured for running tests with Selenium WebDriver. Verify that the settings match your target environment and adjust the following:

- URL: Ensure the url parameter points to the web application under test.
- Browser: Choose the browser for tests (e.g., chrome, firefox).
- WebDriver Settings: Adjust host, port, and desired capabilities if needed.

## Running Tests

1. **Start the Selenium Server**:
If you're using a standalone Selenium server, start it before running tests.
 
    ```
    npx selenium-standalone start
    ```
**important note**: open a new terminal to continue with new commands. this step is important to avoid stopping server run. 

2. Run test
With the server running, you can execute all tests using the command(open in a new terminal):
    ```
    npx codeceptjs run
    ```

## Contact

Feel free to contact with me for any questions, comments or contributions to the project!

Kübra Nazlıhan IŞIK - [kuisik@gmail.com](kuisik@gmail.com)
