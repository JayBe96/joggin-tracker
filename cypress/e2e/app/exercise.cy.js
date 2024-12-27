describe('Exercise Page Tests', () => {
  beforeEach(() => {
    cy.setLoggedIn();
    cy.visit('/tabs/exercise');
    cy.url().should('include', '/tabs/exercise');
  });

  it('Switches to Meditation Segment', () => {
    cy.get('[data-testid="exercise-segment"]').within(() => {
      cy.get('[data-testid="segment-meditation"]').click();
    });
    cy.get('[data-testid="meditation-section"]').should('be.visible');
    cy.get('[data-testid="run-section"]').should('not.exist');
  });

  it('Should Save a New Run', () => {
    // Switch to Run Segment
    cy.get('[data-testid="segment-run"]').click();
    cy.get('[data-testid="run-section"]').should('be.visible');

    // Enter Run Details
    cy.get('[data-testid="input-runName"]').type('Test Run');
    cy.get('[data-testid="input-runDuration"]').type('30');
    cy.get('[data-testid="input-runDistance"]').type('5');

    // Interact with ion-select for Run Rating
    cy.get('[data-testid="select-runRating"]').click();

    // Handle ion-alert Overlay
    cy.get('ion-alert').should('be.visible');
    cy.get('ion-alert').find('button').contains('😊 Good').click();
    cy.get('ion-alert').find('button').contains('OK').click({ force: true });

    // Click Save Run Button
    cy.get('[data-testid="button-saveRun"]').click();

    // Verify the Run is Saved in the Database
    cy.readFile('/Users/jonas/Documents/GitHub/Bachelorthesis/joggin-tracker/jsonserver/database/database.json').then((data) => { // TODO: fixed path
      const runs = data.runs;
      const newRun = runs.find(run => run.name === 'Test Run');
      expect(newRun).to.exist;
      expect(newRun.duration).to.equal(30);
      expect(newRun.distance).to.equal(5);
      expect(newRun.rating).to.equal('good');
    });
  });

});