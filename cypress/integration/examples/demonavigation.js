context('Navigation', () => {


    it("Go to User Login",()=>{

        cy.visit('http://localhost:5000')

        cy.get("#UserId").type("xyz@abc.com")

        cy.get("#UserPassword").type("xy1z23")

        cy.get("#btnSubmit").click()

        cy.location('href').should('contains', '/Home/Welcome')
       
    }) 
   
     
})


