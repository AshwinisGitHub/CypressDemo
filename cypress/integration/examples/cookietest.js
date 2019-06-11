

describe("",() => {

    //let prajwalcookie= Sessioncookie;

it("this is cookie test",() => {

    cy.visit("https://mail.google.com/mail/#inbox");
    cy.get(".h-c-header__nav-li-link").should("contains","Sign in");
    cy.get("#profileIdentifier").click();
    cy.get(".BHzsHc").should("contains","Use another account");
    


})



})