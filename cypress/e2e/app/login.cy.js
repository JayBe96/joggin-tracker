describe('Login Test', () => {
  it('Logs into the application and redirects to the homescreen', () => {
    cy.visit('/login');
    // Enter username
    cy.get('ion-input[name="username"] input').type('bljo');
    // Enter password
    cy.get('ion-input[name="password"] input').type('test');
    // Click the login button
    cy.get('ion-button[type="submit"]').click();
    // Assert that the URL includes '/tabs/homescreen'
    cy.url().should('include', '/tabs/homescreen');
  });
});