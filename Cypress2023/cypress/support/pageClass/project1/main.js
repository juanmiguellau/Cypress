class main {

   visitSiteWeb () {
    beforeEach(() => {
        //cy.visit("https://www.google.com/")
        //cy.get('#L2AGLb > .QS5gu').click()
        cy.visit("https://www.samsung.com/it/smartphones/galaxy-s23/buy/")
        cy.get('.truste-consent-content').contains('Accetta i Cookie').click({force: true})
    })
   }

   checkProductModel () {
    cy.get('#device > .hubble-product__options-content > .hubble-product__options-list-wrap > :nth-child(2) > .s-option-box > .hubble-pd-radio__label > .s-label > .s-label-inner > .s-rdo-text');
   }
  
    checkProductMemory () {
        cy.get(':nth-child(3) > .s-option-box > .hubble-pd-radio__label > .s-label > .s-label-inner > .s-rdo-text').click();  
    }
    
    checkCartModel () {
        cy.get('#deviceSummary > :nth-child(1) > .s-option-title').should("be.visible");
    }

    checkCartMemory () {
        cy.get('.hubble-product__summary-product-price').should("be.visible");
    }
  
   }

export default main;

