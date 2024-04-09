


describe('Test 01: End to end Positive Scenario: Succesful search', () => {
  it('Should search and validate search', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('have.text', 'Get Github Repos') // Verify that the header of the page
    cy.fixture('testdata.json').then((data) => {
      // Extract the value you want to type from the JSON object
      const valueToType = data.PositiveScenarioText;
      
      // Type the value into an input field
      cy.get('#username').type(valueToType);
    });

    cy.get('.submit').click()
    cy.get('strong').should('have.text', 'Success!') // Success message validation
    cy.get('ul > :nth-child(1) > :nth-child(1)').should('be.visible')// Verify that a least one element is displayed
    //Now lets validate the Result
    cy.ValidateText(':nth-child(1) > :nth-child(1) > a','HelloWorld') // Custom Command to validate text of results

  })
})
