describe('Exercise Page Tests', () => {
  beforeEach(() => {
    cy.setLoggedIn();
    cy.visit('/tabs/exercise');
    cy.url().should('include', '/tabs/exercise');
  });

  afterEach(() => {
    cy.fixture('testdatabase.json').then((data) => {
      cy.writeFile('jsonserver/database/database.json', data);
    });
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
    cy.get('[data-testid="input-runName"] input').clear().type('Test Run');
    cy.get('[data-testid="input-runDuration"] input').clear().type('30');
    cy.get('[data-testid="input-runDistance"] input').clear().type('5');

    // Interact with ion-select for Run Rating
    cy.get('[data-testid="select-runRating"]').click();

    // Handle ion-alert Overlay
    cy.get('ion-alert').should('be.visible');
    cy.get('ion-alert').find('button').contains('😊 Good').click();
    cy.get('ion-alert').find('button').contains('OK').click({ force: true });

    // Click Save Run Button
    cy.get('[data-testid="button-saveRun"]').click();

    // Verify the Run is Saved in the Database
    cy.readFile('jsonserver/database/database.json').then((data) => { // TODO: fixed path
      const runs = data.runs;
      const newRun = runs.find(run => run.name === 'Test Run');
      expect(newRun).to.exist;
      expect(newRun.duration).to.equal(30);
      expect(newRun.distance).to.equal(5);
      expect(newRun.rating).to.equal('good');
    });
  });

  
  it('Should Save a New Run (Toast)', () => {
    // Switch to Run Segment
    cy.get('[data-testid="segment-run"]').click();
    cy.get('[data-testid="run-section"]').should('be.visible');

    // Enter Run Details
    cy.get('[data-testid="input-runName"] input').clear().type('Test Run');
    cy.get('[data-testid="input-runDuration"] input').clear().type('30');
    cy.get('[data-testid="input-runDistance"] input').clear().type('5');

    // Interact with ion-select for Run Rating
    cy.get('[data-testid="select-runRating"]').click();

    // Handle ion-alert Overlay
    cy.get('ion-alert').should('be.visible');
    cy.get('ion-alert').find('button').contains('😊 Good').click();
    cy.get('ion-alert').find('button').contains('OK').click({ force: true });

    // Save Run
    cy.get('[data-testid="button-saveRun"]').click();

    // Verify the Toast is Displayed and Green
    cy.get('ion-toast', { timeout: 10000 })
    .should('have.attr', 'color', 'success');

  });

  it('Should Save a New Meditation and show Toast', () => {
    // Switch to Meditation Segment
    cy.get('[data-testid="exercise-segment"]').within(() => {
      cy.get('[data-testid="segment-meditation"]').click();
    });
    cy.get('[data-testid="meditation-section"]').should('be.visible');

    // Enter Meditation Details
    cy.get('[data-testid="input-meditationName"] input').clear().type('Test Meditation');
    cy.get('[data-testid="input-meditationDuration"] input').clear().type('15');
    cy.get('[data-testid="radio-meditationType"] ion-radio[value="Mindfulness meditation"]').click();

    // Interact with ion-select for Meditation Rating
    cy.get('[data-testid="select-meditationRating"]').click();

    // Handle ion-alert Overlay
    cy.get('ion-alert').should('be.visible');
    cy.get('ion-alert').find('button').contains('😊 Good').click();
    cy.get('ion-alert').find('button').contains('OK').click({ force: true });

    // Save Meditation
    cy.get('[data-testid="button-saveMeditation"]').click();

    // Verify the Toast is Displayed and Green
    cy.get('ion-toast', { timeout: 10000 })
    .should('have.attr', 'color', 'success');
  });

  it('Should Save a New Meditation and store in Database', () => {
    // Switch to Meditation Segment
    cy.get('[data-testid="exercise-segment"]').within(() => {
      cy.get('[data-testid="segment-meditation"]').click();
    });
    cy.get('[data-testid="meditation-section"]').should('be.visible');

    // Enter Meditation Details
    cy.get('[data-testid="input-meditationName"] input').clear().type('Test Meditation');
    cy.get('[data-testid="input-meditationDuration"] input').clear().type('15');
    cy.get('[data-testid="radio-meditationType"] ion-radio[value="Mindfulness meditation"]').click();
    
    // Interact with ion-select for Meditation Rating
    cy.get('[data-testid="select-meditationRating"]').click();

    // Handle ion-alert Overlay
    cy.get('ion-alert').should('be.visible');
    cy.get('ion-alert').find('button').contains('😊 Good').click();
    cy.get('ion-alert').find('button').contains('OK').click({ force: true });

    // Save Meditation
    cy.get('[data-testid="button-saveMeditation"]').click();

    // Verify the Meditation is Saved in the Database
    cy.readFile('jsonserver/database/database.json').then((data) => {
      const meditations = data.meditations;
      const newMeditation = meditations.find(meditation => meditation.name === 'Test Meditation');
      expect(newMeditation).to.exist;
      expect(newMeditation.duration).to.equal(15);
      expect(newMeditation.type).to.equal('Mindfulness meditation');
      expect(newMeditation.rating).to.equal('good');
    });
  });

});