import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AmazonLivePage from "../../../pageObjects/AmazonLivePage";

const amazonlive= new AmazonLivePage()

Given('Land on the Amazon Live homepage which is ASVH page', function()
{
    cy.visit(Cypress.env('url')+'/live')
    cy.wait(2000)
}
)

//Perform clicks on follow tab, browse tab and amazon logo
When('Perform clicks on follow tab and browse tab', function()
{
    //Clicking on Follow button
    amazonlive.followBtn().click()
    cy.wait(2000)

    //Clicking on Browse button
    amazonlive.browseBtn().click()
    cy.wait(2000)
}
)

Then('Successfully land on the homepage again after clicking on amazon logo', function()
{
    //Clicking on homepage-amazon logo
    amazonlive.amazonLogo().click()
}
)