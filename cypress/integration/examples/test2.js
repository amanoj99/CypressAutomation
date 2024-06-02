import AmazonLivePage from "../pageObjects/AmazonLivePage"

describe('My second test suite', function()
{
it('Test case validating different headers on amazon.live page', function()
{
    const amazonlive= new AmazonLivePage()

    cy.visit(Cypress.env('url')+'/live')
    cy.wait(2000)

    //asserting the Following text
    amazonlive.followHeaderValidate().should('have.text', 'Following')

    //Validate Following header, grab the text and print the log
    amazonlive.followHeaderValidate().then(function(logelement)
    {
        cy.log(logelement.text())
    }
    
    )
    cy.wait(4000)
    //asserting the featured creators text
    amazonlive.featuredCreatorHeaderValidate().should('have.text','Featured Creators')

    //Validate featured creator header, grab the text and print the log
    amazonlive.featuredCreatorHeaderValidate().then(function(logelement1)
    {
        cy.log(logelement1.text())
    }

    )
    
    //scroll the page till middle of the page and to bottom and to the top again
    cy.scrollTo('center')
    cy.wait(5000)

    cy.scrollTo('bottom')
    cy.wait(5000)

    cy.scrollTo('top')
    cy.wait(3000)

}

)
}

)