class AmazonSigninPage
{
    signinBtnClick()
    {
        return cy.get('#nav-link-accountList')
    }

    continueBtnClick()
    {
        return cy.get('#continue')
    }

    emailErrorMessage()
    {
        return cy.get('div[id="auth-email-missing-alert"] div[class="a-alert-content"]')
    }
}
export default AmazonSigninPage