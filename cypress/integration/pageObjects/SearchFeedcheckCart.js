class SearchFeedcheckCart
{
    searchitem()
    {
        return cy.get('#twotabsearchtextbox')
    }

    searchBtnClick()
    {
        return cy.get('#nav-search-submit-button')
    }

    searcheditemGetText()
    {
        return cy.get('div[class="a-section a-spacing-small a-spacing-top-small"] span[class="a-color-state a-text-bold"]')
    }

    cartClick()
    {
        return cy.get('#nav-cart')
    }

    emptycartGetText()
    {
        return cy.get('div[class="a-row sc-your-amazon-cart-is-empty"]')
    }
}
export default SearchFeedcheckCart