Cypress.Commands.add("assertProductModel",(mess) => {
    cy.get('#device > .hubble-product__options-content > .hubble-product__options-list-wrap > :nth-child(2) > .s-option-box > .hubble-pd-radio__label > .s-label > .s-label-inner > .s-rdo-text').should("contains.text",mess)  
});

Cypress.Commands.add("assertProductMemory",(label) => {
    cy.get(':nth-child(3) > .s-option-box > .hubble-pd-radio__label > .s-label > .s-label-inner > .s-rdo-text').should("contains.text",label)
});

Cypress.Commands.add("assertCartModel",(model) => {
    cy.get('#deviceSummary > :nth-child(1) > .s-option-title').should("have.text",model)
});

Cypress.Commands.add("assertCartMemory",(memory) => {
    cy.get('.hubble-product__summary-product-price').should("have.text",memory)
})