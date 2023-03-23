import main from "../support/pageClass/project1/main";
const { cyan } = require("colorette")

describe("WebSiteTest", ()=> {
    const webSite=new main();
    webSite.visitSiteWeb();

    Cypress.on("uncaught:exception",(err, runnable) => {
        return false
    })

   it("checkProduct", ()=> {
   webSite.checkProductModel();
   cy.assertProductModel("Galaxy S23+");
   webSite.checkProductMemory();
   cy.assertProductMemory("512GB | 8GB");
   })

   it("checkCart", ()=> {
    webSite.checkCartModel();
    cy.assertCartModel("Galaxy S23+");
    webSite.checkCartMemory ();
    cy.assertCartMemory("1.349,00 €");

   })

})