import AmazonSigninPage from "../pageObjects/AmazonSigninPage"

describe('Third test suite', function()
{   
    before(function()
    {
        //runs once before all the tests in the block
        //this.data should be used for data to be made accessible outside the before() hook
        cy.fixture('testdata').then(function(data)
        {
            this.data=data
        }
        )
    }
    )

    it('Validating sign-in and sign-out on amazon.in page',function()
    
   {
        const amazonsignin = new AmazonSigninPage()

        //visting the URL:amazon.in
        cy.visit(Cypress.env('url'))

        //Asserting whether amazon.in URL is hit
        cy.url().should('include','amazon.in/')

        //Clicking on Sign in link to open sign in page
        amazonsignin.signinBtnClick().click()

        //Clicking on continue button
        amazonsignin.continueBtnClick().click()

        //Asserting the error message text
        amazonsignin.emailErrorMessage().should('have.text','\n  Enter your email or mobile phone number\n')

        //printing the error message
        amazonsignin.emailErrorMessage().then(function(txt)
        {
            cy.log(txt.text())
        }
        )

        //Enter correct email address
        cy.get('#ap_email').type(this.data.email)

        //Click on continue button
        cy.get('#continue').click()

        //Enter correct password
        cy.get('#ap_password').type(this.data.password)

        //click on sign in button
        cy.get('#signInSubmit').click()

        //Signing out of the page
        cy.get('#nav-item-signout').click({force: true})

   } 
      )
}

)