describe('Data Page Tests', () => {
  beforeEach(() => {
    cy.setLoggedIn();
    cy.visit('/tabs/data');
    cy.url().should('include', '/tabs/data');
  });

  afterEach(() => {
    cy.clearLocalStorage();
  });

  // Runs Section Tests
  describe('Runs Section', () => {
    it('displays the list of runs', () => {
      cy.get('ion-card').contains('Runs');
      cy.get('ion-item[data-testid^="item-run-"]').should('have.length.greaterThan', 0);
    });

    it('navigates to edit run when a run item is clicked', () => {
      cy.get('ion-item[data-testid="item-run-1"]').click();
      cy.url().should('include', '/edit-run');
    });

    it('deletes a run and removes it from the list', () => {
      cy.get('ion-item[data-testid="item-run-1"]').within(() => {
        cy.get('ion-button[data-testid="button-deleteRun-1"]').click();
      });
      cy.get('ion-item[data-testid="item-run-1"]').should('not.exist');
    });
  });

  // Meditations Section Tests
  describe('Meditations Section', () => {
    it('displays the list of meditations', () => {
      cy.get('ion-card').contains('Meditations');
      cy.get('ion-item[data-testid^="item-meditation-"]').should('have.length.greaterThan', 0);
    });

    it('navigates to edit meditation when a meditation item is clicked', () => {
      cy.get('ion-item[data-testid="item-meditation-1"]').click();
      cy.url().should('include', '/edit-meditation');
    });

    it('deletes a meditation and removes it from the list', () => {
      cy.get('ion-item[data-testid="item-meditation-1"]').within(() => {
        cy.get('ion-button[data-testid="button-deleteMeditation-1"]').click();
      });
      cy.get('ion-item[data-testid="item-meditation-1"]').should('not.exist');
    });
  });
});