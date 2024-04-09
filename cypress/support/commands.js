

Cypress.Commands.add('ValidateText', (selector, text) => { 
    cy.get(selector) // Element
      .then(($element) => {
        const Text = $element.text();
        // Log for debuggin
        cy.log('Element text:', Text);
        // Aassertion 
        expect(text).to.contain(Text); // Verify that the Variable and the displayed text are the same.
         

  })
 })