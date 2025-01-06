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
      
        // Select the "Mantra-Meditation" type from the alert overlay
        cy.get('[data-testid="radio-mantra-meditation"]').click();
      
        // Ensure the "Type" is updated correctly
        cy.get('ion-item[data-testid="item-meditation-1"]').within(() => {
          cy.get('ion-label p').eq(2).should('have.text', 'Type: Mantra-Meditation');
        });
      
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