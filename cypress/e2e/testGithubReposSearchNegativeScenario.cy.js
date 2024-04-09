

describe('Test 02: End to end Negative Scenario. No results.', () => {
  it('Should search and validate search', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('have.text', 'Get Github Repos') // Verify that the header of the page
    cy.fixture('testdata.json').then((data) => {
      // Extract the value you want to type from the JSON object
      const valueToType = data.NegativeScenarioText;
      
      // Type the value into an input field
      cy.get('#username').type(valueToType);
    });
    cy.get('.submit').click()
    //Now lets validate the Result
    cy.ValidateText('.output-status-text','No repos') // Custom Command to validate text of results 

  })
  
})
