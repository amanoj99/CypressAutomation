class AmazonLivePage
{

    followBtn()
    {
       return cy.get('span[data-content="Following"]')
    }

    browseBtn()
    {
        return cy.get('span[data-content="Browse"]')
    }

    amazonLogo()
    {
       return cy.get('a[data-id="pageHeaderLogo"]')
    }

    followHeaderValidate()
    {
        return cy.get('section[data-id="aside-followingCreators"] h4[class="aside-module__heading_pHybTIIiQ0uUiuIlOP4dv"]')
    }

    featuredCreatorHeaderValidate()
    {
        return cy.get('section[data-id="aside-featuredCreators"] h4[class="aside-module__heading_pHybTIIiQ0uUiuIlOP4dv"]')
    }
}
export default AmazonLivePage