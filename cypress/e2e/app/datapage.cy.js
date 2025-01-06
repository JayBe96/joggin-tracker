describe('Data Page Tests', () => {
  beforeEach(() => {
    cy.setLoggedIn();
    cy.visit('/tabs/data');
    cy.url().should('include', '/tabs/data');
  });

  afterEach(() => {
    cy.fixture('testdatabase.json').then((data) => {
      cy.writeFile('jsonserver/database/database.json', data);
    });
  });

  // Runs Section Tests
  describe('Runs Section', () => {
    it('displays the list of runs and validates each run against the database', () => {
      cy.readFile('jsonserver/database/database.json').then((data) => {
        const runs = data.runs;
        cy.get('ion-card').contains('Runs');
        cy.get('ion-item[data-testid^="item-run-"]').should('have.length', runs.length);
        runs.forEach((run, index) => {
          cy.get(`ion-item[data-testid="item-run-${index + 1}"]`).within(() => {
            cy.get('ion-label h3').should('have.text', run.name);
            cy.get('ion-label p').eq(0).should('have.text', `Duration: ${run.duration} minutes`);
            cy.get('ion-label p').eq(1).should('have.text', `Distance: ${run.distance} km`);
            cy.get('ion-label p').eq(2).should('have.text', `Rating: ${run.rating}`);
          });
        });
      });
    });

    it('edits a run and updates it in the database', () => {
      // Click on the first run item to open the edit modal
      cy.get('ion-item[data-testid="item-run-1"]').click();

      // Update the Name field
      cy.contains('ion-label', 'Name')
        .parent()
        .find('ion-input')
        .find('input')
        .clear()
        .type('Test_1');

      // Update the Duration field
      cy.contains('ion-label', 'Duration (minutes)')
        .parent()
        .find('ion-input')
        .find('input')
        .clear()
        .type('1');

      // Update the Distance field
      cy.contains('ion-label', 'Distance (km)')
        .parent()
        .find('ion-input')
        .find('input')
        .clear()
        .type('1');

      // Update the Rating field
      cy.contains('ion-label', 'Rate your run')
        .parent()
        .find('ion-select')
        .click();

      // Select the "Good" rating from the alert overlay
      cy.contains('.alert-radio-group button', '😊 Good').click();

      // Click the OK button in the alert overlay
      cy.contains('.alert-button-group button', 'OK').click();

      // Click the Save button
      cy.get('ion-button').contains('Save').click();

      // Ensure the run item is back in view
      cy.get('ion-item[data-testid="item-run-1"]')
        .scrollIntoView()
        .should('be.visible');

      // Verify that the run details are updated in the list
      cy.get('ion-item[data-testid="item-run-1"]').within(() => {
        cy.get('ion-label h3').should('have.text', 'Test_1');
        cy.get('ion-label p').eq(0).should('have.text', 'Duration: 1 minutes');
        cy.get('ion-label p').eq(1).should('have.text', 'Distance: 1 km');
        cy.get('ion-label p').eq(2).should('have.text', 'Rating: good');
      });

      // Verify the updated run in the database
      cy.readFile('jsonserver/database/database.json').then((data) => {
        const updatedRun = data.runs.find(run => run.name === 'Test_1');
        expect(updatedRun).to.exist;
        expect(updatedRun.duration).to.equal(1);
        expect(updatedRun.distance).to.equal(1);
        expect(updatedRun.rating).to.equal('good');
      });
    });

    it('deletes a run with confirmation and removes it from the database', () => {
        cy.readFile('jsonserver/database/database.json').then((data) => {
          const initialRunCount = data.runs.length;
          const runToDelete = data.runs[0];
      
        // Scroll to the delete button and click it
        cy.get(`ion-button[data-testid="button-deleteRun-1"]`)
          .scrollIntoView({ ensureScrollable: false })
          .click({ force: true });
      
          // Verify that the run is removed from the UI
          cy.get('ion-item[data-testid^="item-run-"]').should('have.length', initialRunCount - 1);
      
          // Verify that the run is removed from the database
          cy.readFile('jsonserver/database/database.json').then((updatedData) => {
            const deletedRun = updatedData.runs.find(run => run.id === runToDelete.id);
            expect(deletedRun).to.not.exist;
          });
        });
      });
    });

  // Meditations Section Tests
  describe('Meditations Section', () => {
    it('displays the list of meditations and validates each meditation against the database', () => {
      cy.readFile('jsonserver/database/database.json').then((data) => {
        const meditations = data.meditations;
        cy.get('ion-card').contains('Meditations');
        cy.get('ion-item[data-testid^="item-meditation-"]').should('have.length', meditations.length);
        meditations.forEach((meditation, index) => {
          cy.get(`ion-item[data-testid="item-meditation-${index + 1}"]`).within(() => {
            cy.get('ion-label h3').should('have.text', meditation.name);
            cy.get('ion-label p').eq(0).should('have.text', `Duration: ${meditation.duration} minutes`);
            cy.get('ion-label p').eq(1).should('have.text', `Type: ${meditation.type}`);
            cy.get('ion-label p').eq(2).should('have.text', `Rating: ${meditation.rating}`);
          });
        });
      });
    });


    it('edits a meditation and updates it in the database', () => {
      // Click on the first meditation item to open the edit modal
      cy.get('ion-item[data-testid="item-meditation-1"]').click();

      // Update the Name field
      cy.contains('ion-label', 'Name')
        .parent()
        .find('ion-input')
        .find('input')
        .clear()
        .type('Meditation_Test_1');

      // Update the Duration field
      cy.contains('ion-label', 'Duration (minutes)')
        .parent()
        .find('ion-input')
        .find('input')
        .clear()
        .type('10');

      // Update the Type field
      cy.contains('ion-label', 'Type')
        .parent()
        .find('ion-select')
        .click();

      // Select the "Mantra-Meditation" type from the alert overlay
      cy.contains('.alert-radio-group button', 'Mantra-Meditation').click();

      // Click the OK button in the alert overlay
      cy.contains('.alert-button-group button', 'OK').click();

      // Update the Rating field
      cy.contains('ion-label', 'Rating')
        .parent()
        .find('ion-select')
        .click();

      // Select the "Good" rating from the alert overlay
      cy.contains('.alert-radio-group button', '😊 Good').click();

      // Click the OK button in the alert overlay
      cy.contains('.alert-button-group button', 'OK').click();

      // Click the Save button
      cy.get('ion-button').contains('Save').click();

      // Ensure the meditation item is back in view
      cy.get('ion-item[data-testid="item-meditation-1"]')
        .scrollIntoView()
        .should('be.visible');

      // Verify that the meditation details are updated in the list
      cy.get('ion-item[data-testid="item-meditation-1"]').within(() => {
        cy.get('ion-label h3').should('have.text', 'Meditation_Test_1');
        cy.get('ion-label p').eq(0).should('have.text', 'Duration: 10 minutes');
        cy.get('ion-label p').eq(1).should('have.text', 'Type: Guided');
        cy.get('ion-label p').eq(2).should('have.text', 'Rating: good');
      });

      // Verify the updated meditation in the database
      cy.readFile('jsonserver/database/database.json').then((data) => {
        const updatedMeditation = data.meditations.find(meditation => meditation.name === 'Meditation_Test_1');
        expect(updatedMeditation).to.exist;
        expect(updatedMeditation.duration).to.equal(10);
        expect(updatedMeditation.type).to.equal('Guided');
        expect(updatedMeditation.rating).to.equal('good');
      });
    });
  });
});