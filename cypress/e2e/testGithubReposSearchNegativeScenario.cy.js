

describe('Test 02: End to end Negative Scenario. No results.', () => {
  it('Should search and validate search', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('have.text', 'Get Github Repos') // Verify that the header of the page
    cy.get('#username').type('what is this') // Input text 
    cy.get('.submit').click()
    //cy.get('.message-failure').should('have.text', 'Github user not found!') // No user found message validation
    //Now lets validate the Result
    cy.ValidateText('.output-status-text','No repos') // Custom Command to validate text of results 

  })
  
})
