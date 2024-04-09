


describe('Test 01: End to end Positive Scenario: Succesful search', () => {
  it('Should search and validate search', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('have.text', 'Get Github Repos') // Verify that the header of the page
    cy.get('#username').type('Test') // Input text 
    cy.get('.submit').click()
    cy.get('strong').should('have.text', 'Success!') // Success message validation
    cy.get('ul > :nth-child(1) > :nth-child(1)').should('be.visible')// Verify that a least one element is displayed
    //Now lets validate the Result
    cy.get(':nth-child(1) > :nth-child(1) > a') // select the first element from the list 
      .then(($element) => {
        const text = $element.text();
        // Log for debuggin
        cy.log('Element text:', text);
        // Aassertion 
        expect(text).to.contain('HelloWorld'); // Verify that the Variable and the displayed text are the same.

      
    

  })
})
})