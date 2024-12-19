# Notizen für Cypress + Copilote

## Anfang

Generieren eines Prompts für Copilote mit Hilfe von Google Gemini 2.0 Flash Experimental.

I am writting a bachelorthesis about e2e Frameworks. Therefore i want to test them. I have written an application which i did tests with webdriverio, now i want to tests the whole app with Cypress and copilote and see wether the Results with a new Framework and Copilote are similar to a framework i know well. Sinc I mostly want to rely on Copilot to do the work i need well engineered Prompts, can you help me by writting the First prompt for this expiriment for Copilote. Give it the context of me having the app and wanting to fully write the end-to-end tests with me i. It should use Cypress and the beest practices, aswell as explaining me stuff and do everything step by step in small little steps, Starting with setting it up together. 

```markdown
I'm writing my bachelor thesis about end-to-end (E2E) testing frameworks. I've already tested my application using WebdriverIO. Now, I want to test the *same* application using Cypress and rely heavily on your assistance via prompts. The goal is to compare the results and effort with a familiar framework (WebdriverIO) and explore how effective AI assistance (you!) can be in this process.

My application is already running and accessible at on http://localhost:4200/.

I am using 2 JSON Server 1 for a simulated login server and another 1 for a Database. 

I want you to guide me step-by-step through the entire process of setting up and writing E2E tests with Cypress, focusing on best practices. Please break down each step into small, manageable tasks and explain the reasoning behind your suggestions. I want to learn along the way.

The process can be divided into two main parts:

1.  **Project Setup:** This includes guiding me through setting up a new Cypress project in my existing application's directory (or a separate test directory if that's better practice). This includes installing Cypress, configuring any necessary files (like `cypress.config.js` or `cypress.config.ts`), and explaining the project structure.

2.  **Writing Test Cases:** After setup, we'll focus on writing various test cases to cover different user flows in my application.

Throughout both parts, please adhere to the following principles:

*   **Best Practices:** Always highlight and use Cypress best practices, such as:
    *   Using selectors effectively (avoiding brittle selectors).
    *   Using custom commands for reusable actions.
    *   Managing test data and fixtures.
    *   Structuring tests for maintainability.
    *   Using `cy.intercept()` for stubbing network requests (if necessary).
*   **Explanations:** Explain the purpose of each step and the reasoning behind the chosen approach. This is crucial for my learning and thesis.
*   **Small Steps:** Please provide instructions in small, actionable steps. Don't overwhelm me with large chunks of code or complex configurations at once.

Let's start with part 1: Project Setup. What should I do first?
```
## Setup
```
npm install cypress --save-dev
```
-> Installiert
```
npx cypress open
```
öffnet eine Cypress Anwendungsfenster.  
Erklärvideo, neue Releas  
Auswahl zwischen e2e und Component Testing  
Auswahl des Browsers.
Erstellen Testfiles. 