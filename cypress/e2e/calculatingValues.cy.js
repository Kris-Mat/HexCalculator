describe('Hex Calculator operations', () => {
  it('should click on "1" and have the display show "1"', () => {
    cy.visit('http://localhost:5174/');

    cy.get('.valueButtons').contains('1').click();

    cy.get('.display').should('have.text', '1');
  })

  it('should click on "1 + 1 =" and have the display show "2"', () => {
    cy.visit('http://localhost:5174/');

    cy.get('.valueButtons').contains('1').click();

    cy.get('.display').should('have.text', '1');
    cy.get('.small-equation').should('have.text', '1   ');

    cy.get('.operationButtons').contains('+').click();

    cy.get('.display').should('have.text', '1');
    cy.get('.small-equation').should('have.text', '1 +  ');

    cy.get('.valueButtons').contains('1').click();

    cy.get('.display').should('have.text', '1');
    cy.get('.small-equation').should('have.text', '1 + 1 ');

    cy.get('.operationButtons').contains('=').click();

    cy.get('.display').should('have.text', '2');
    cy.get('.small-equation').should('have.text', '1 + 1 =');
  })
})