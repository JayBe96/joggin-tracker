describe('Exercise Page Tests', () => {
    beforeEach(() => {
      cy.setLoggedIn();
      cy.visit('/tabs/menu/info');
      cy.url().should('include', '/tabs/menu/info');
    });

    it('should navigate back to homescreen when back button is clicked', () => {
        cy.get('[data-testid="back-button"]').click();
        cy.url().should('include', '/tabs/homescreen');
    });

    it('should scroll to button, click it, and verify the URL', () => {
        cy.window().then((win) => {
            const viewportHeight = win.innerHeight;
            const centerOffset = Math.floor(viewportHeight / 2);
            
            cy.get('[data-testid="button-viewOnGitHub"]')
              .scrollIntoView({ offset: { top: -centerOffset + 100, left: 0 } })
              .click();
        });
        cy.url().should('include', 'github.com/JayBe96');
    });
});