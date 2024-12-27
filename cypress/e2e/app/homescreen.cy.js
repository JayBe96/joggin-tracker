describe('Homescreen Navigation Tests', () => {
  beforeEach(() => {
    cy.setLoggedIn();
    cy.url().should('include', '/tabs/homescreen');
  });

  afterEach(() => {
    cy.clearLocalStorage();
  });

  it('Navigates to Exercise page via Tabbar', () => {
    cy.get('[data-testid="tab-exercise"]').click();
    cy.url().should('include', '/tabs/exercise');
  });

  it('Navigates to Data page via Tabbar', () => {
    cy.get('[data-testid="tab-data"]').click();
    cy.url().should('include', '/tabs/data');
  });

  it('Navigates to Home page via Tabbar', () => {
    cy.get('[data-testid="tab-home"]').click();
    cy.url().should('include', '/tabs/homescreen');
  });

  it('Navigates to Info page via Menu', () => {
    cy.get('[data-testid="tab-menu"]').click();
    cy.get('ion-menu ion-content').contains('Info').click();
    cy.url().should('include', '/tabs/menu/info');
  });
});