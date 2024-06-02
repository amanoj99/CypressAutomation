import AmazonLivePage from "../pageObjects/AmazonLivePage"

describe('My first test suite', function()
{
it('Validating Discover, Following and Browse tabs present and amazonLogoClick', function()
{
    const amazonlive= new AmazonLivePage()

    //hitting the amazon.live URL
    cy.visit(Cypress.env('url')+'/live')
    cy.wait(2000)

    //Clicking on Follow button
    amazonlive.followBtn().click()
    cy.wait(2000)

    //Clicking on Browse button
    amazonlive.browseBtn().click()
    cy.wait(2000)
    
    //Clicking on homepage-amazon logo
    amazonlive.amazonLogo().click()
}
)
}

)