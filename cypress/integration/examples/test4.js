import SearchFeedcheckCart from "../pageObjects/SearchFeedcheckCart"

describe('Fourth test suite',function()
{
    it('Search item and check for feed till end and add to cart functionality',function()
    {
        const searchfeedcart = new SearchFeedcheckCart()

        //visting the URL:amazon.in
        cy.visit(Cypress.env('url'))   

        //Search an item and hit search button
        searchfeedcart.searchitem().type('NIKE shoes for men')
        cy.wait(3000)
        
        searchfeedcart.searchBtnClick().click()

        //scroll to bottom of the page
        cy.scrollTo('bottom')
        cy.wait(2000)

        //scroll to top of the page
        cy.scrollTo('top')
        cy.wait(2000)

        //Get the text of the searched item "Nike shoes"
        searchfeedcart.searcheditemGetText().then(function(nike_txt)
        {
            cy.log(nike_txt.text())
        }
        )
        //click on cart buton
        searchfeedcart.cartClick().click()

        //Get the text of empty cart
        searchfeedcart.emptycartGetText().then(function(empty_cart_txt)
        {
            cy.log(empty_cart_txt.text())
        }
        )


    }
    
    )
}


)