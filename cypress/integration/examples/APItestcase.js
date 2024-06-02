describe('API test suite', function()
{
it('First API test case to validate the property inside the body of a response', function()
{
    cy.request('GET','https://www.amazon.in/af/feedback-link?pl=%7B%22adPlacementMetaData%22%3A%7B%22adElementId%22%3A%22ape_Gateway_right-2_desktop_placement%22%2C%22pageType%22%3A%22Gateway%22%2C%22pageUrl%22%3A%22aHR0cHM6Ly93d3cuYW1hem9uLmluLz8%3D%22%2C%22slotName%22%3A%22right-2%22%7D%2C%22adCreativeMetaData%22%3A%7B%22adProgramId%22%3A%221027%22%2C%22adCreativeTemplateName%22%3A%22Dynamic%20eCommerce_SD_CI_IN_DESKTOP%22%2C%22adImpressionId%22%3A%22https%3A%2F%2Faax-eu.amazon.in%2Fe%2Fxsp%2Fimp%3Fb%3DRAlw3zQh3lQkDBgaGTp45YAAAAGO9QmxxwMAAAH_AQBvbm9fdHhuX2JpZDEgICBvbm9fdHhuX2ltcDEgICBJg1to%22%2C%22adCreativeId%22%3A%220%22%2C%22adId%22%3A%22300155704827832%22%2C%22adCreativeDetails%22%3A%5B%7B%22version%22%3A1%2C%22advertiserIdNS%22%3A%22axiom.A21TJRUUN4KGV.A1AXGLRL74XYZK%22%2C%22campaignIdNS%22%3Anull%2C%22selectionSignals%22%3A%7B%22context%22%3Atrue%2C%22location%22%3Atrue%2C%22pastActivity%22%3A%22AMAZON_ONLY%22%7D%7D%5D%2C%22adNetwork%22%3A%22cs%22%7D%7D').then((response) =>
    {
        expect(response.body).to.have.property('status','ok')
    }

)
//Waiting for 3s before second test case execute
cy.wait(3000)
}
)
it('Second API test case for amazon.in signinPage', function()
{
    cy.request({
        method: 'POST',
        url: 'https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0',

        //For signin page we've to use form=true as below
        form: true,
        body: {
            username: 'mnoama+US1@amazon.com',
            password: 'testtest'
        }

    }).then((response) =>
    {
        expect(response.status).to.eq(200)
    }
)
}

)

}


)