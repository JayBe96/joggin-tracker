Cypress.Commands.add('setLoggedIn', () => {
  cy.visit('/', {
    onBeforeLoad(win) {
      win.localStorage.setItem('loggedIn', 'true');
    },
  });
});