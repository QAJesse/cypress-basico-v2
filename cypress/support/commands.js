Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Jesse')
    cy.get('#lastName').type('Soares')
    cy.get('#email').type('suarezjesse@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()  
})

