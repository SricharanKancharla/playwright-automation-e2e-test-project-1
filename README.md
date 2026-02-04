# Playwright E2E Automation Testing Project

A comprehensive end-to-end testing project demonstrating Playwright automation capabilities on a real-world e-commerce application.

## 🔗 Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sricharankancharla)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SricharanKancharla)
[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@kancharlasricharan)

---

## 📋 Project Overview

This project showcases fundamental to intermediate Playwright automation testing skills through comprehensive end-to-end testing of an e-commerce application. Built from scratch as a learning milestone, it demonstrates practical implementation of core testing concepts and automation best practices.

**Application Under Test**: [https://rahulshettyacademy.com/client](https://rahulshettyacademy.com/client)

### Acknowledgment

The project idea and test scenarios are inspired by the Udemy course **"Playwright JS/TS Automation Testing from Scratch & Framework"** by **Rahul Shetty** from Rahul Shetty Academy. While the concept draws from the course curriculum, all automation scripts and implementation logic are independently written from scratch.

---

## 🎯 Testing Scope

This project covers a complete user journey through the e-commerce platform, validating critical functionalities at each step:

### Test Scenarios Covered

1. **User Authentication**
   - Login functionality with valid credentials
   - Session validation

2. **Product Management**
   - Product search and selection
   - Add to cart functionality
   - Cart quantity validation

3. **Checkout Process**
   - Shopping cart review
   - Shipping details form filling
   - Payment information entry (credit card details)
   - Coupon code application and validation

4. **Order Management**
   - Order placement confirmation
   - Order history verification
   - Order summary details validation
   - Product consistency checks across pages

5. **Session Management**
   - Logout functionality
   - Return to login page validation

### Assertions Implemented

- Product name consistency throughout the flow
- Quantity verification in cart and checkout
- User details accuracy in the order summary
- Coupon application validation
- Order placement confirmation
- Successful navigation between pages

---

## 🛠️ Technologies & Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| **Playwright** | 1.58.1 | Test automation framework |
| **Node.js** | 25.1.0 | Runtime environment |
| **JavaScript** | ES6+ | Programming language |
| **Visual Studio Code** | Latest | IDE |
| **Git** | Latest | Version control |
| **Windows 11** | - | Operating system |

---

## 🧪 Testing Types Implemented

- **Cross-Browser Testing**: Chrome, Firefox, WebKit
- **Functional Testing**: Feature validation across user workflows
- **UI Testing**: Element interactions and visual validations

---

## 📁 Project Structure

```
playwright-automation-e2e-test-project-1/
│
├── tests/
│    ├── clientapp.spec.js          # Main test specification file
│    └── clientappOPT.spec.js       # Optimised test specification file
│
├── screenshots/
│   └── couponapplied.png          # Test data configuration
│
├── test-data/
│   └── testdata.json               # Test data configuration
│
├── playwright.config.js            # Playwright configuration
├── package.json                    # Project dependencies
├── package-lock.json               # Locked dependencies
└── .gitignore                      # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v25.1.0 or higher)
- npm (comes with Node.js)
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/SricharanKancharla/playwright-automation-e2e-test-project-1.git
   ```

2. **Navigate to project directory**
   ```bash
   cd playwright-automation-e2e-test-project-1
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

### Running Tests

**Run all tests**
```bash
npx playwright test
```

**Run tests in headed mode**
```bash
npx playwright test --headed
```

**Run tests in a specific browser**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run tests in debug mode**
```bash
npx playwright test --debug
```

**View test report**
```bash
npx playwright show-report
```

**Run tests in UI mode**
```bash
npx playwright test --ui
```

---

## 🔍 Technical Highlights

### Current Implementation

- **CSS Selectors**: Utilized custom CSS selectors for element identification, providing hands-on experience with DOM structure and selector specificity
- **Basic Assertions**: Implemented core Playwright assertion methods for validation
- **Form Handling**: Managed various form elements, including text fields, dropdowns (static and auto-suggestion), buttons, and links
- **Data-Driven Testing**: Externalized test data using JSON configuration
- **Cross-Browser Execution**: Configured parallel testing across multiple browsers

### Learning Outcomes

This project represents a significant learning milestone, demonstrating:
- Understanding of Playwright's core capabilities
- Practical application of automation concepts
- Problem-solving through official documentation
- Git version control basics
- Structured test organization

The experience of building this project from scratch provided valuable insights into the testing lifecycle, debugging techniques, and the satisfaction of watching automated tests execute successfully end-to-end.

---

## 🔮 Future Enhancements

This project is designed as a foundation for continuous improvement. Planned upgrades include:

### Phase 1: Code Optimization
- Migrate from CSS selectors to Playwright's built-in locators (getByRole, getByText, getByLabel, etc.)
- Implement advanced assertion methods (expect assertions with auto-wait)
- Enhance error handling and reporting
- Add screenshot and video capture for failures

### Phase 2: Framework Implementation
- Implement Page Object Model (POM) design pattern
- Create reusable utility functions and helper classes
- Organize tests with proper test suites
- Add configuration management for multiple environments

### Phase 3: Advanced Testing
- API testing integration
- Visual regression testing

### Phase 4: CI/CD Integration
- Jenkins pipeline setup
- Azure DevOps integration
- Automated test execution on code commits
- Test report generation and distribution

### Phase 5: Emerging Technologies
- Explore Playwright AI agent capabilities
- Implement AI-assisted debugging
- Leverage AI for test generation and maintenance

---

## 📊 Test Configuration

The `playwright.config.js` is configured for:
- Multiple browser support (Chromium, Firefox, WebKit)
- Parallel test execution
- HTML report generation
- Retry logic for flaky tests

---

## 💡 Key Learnings

This project provided hands-on experience with:
- Setting up a Playwright project from scratch
- Writing maintainable test scripts
- Working with real-world application scenarios
- Debugging test failures using Playwright tools
- Understanding asynchronous JavaScript in a testing context
- Version control with Git commands (`git init`, `git add`, `git commit`, `git push`, `git branch`)
- Reading and applying official documentation effectively

---

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are always welcome! Feel free to:
- Open issues for bugs or suggestions
- Share best practices
- Provide constructive feedback

---

## 📝 Notes

- **Beginner-Friendly**: This project is intentionally kept simple as a learning artifact, showcasing foundational skills rather than advanced patterns
- **Work in Progress**: Continuous improvements and upgrades are planned
- **Learning Resource**: Can serve as a reference for others beginning their Playwright automation journey

---

## 📜 License

This project is open source and available for learning purposes.

---

## 🙏 Acknowledgments

- **Rahul Shetty** and **Rahul Shetty Academy** for the excellent course content and project inspiration
- **Playwright Community** for comprehensive documentation and support
- **YouTube Creators** and fellow learners who share knowledge generously

---

## 📫 Feedback

If you found this project helpful or have suggestions for improvement, feel free to reach out through the social links above!

---
