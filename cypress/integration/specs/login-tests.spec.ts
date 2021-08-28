
import { LoginPage } from '../../page-objects/pages.page';
const testPage = new LoginPage("https://opensource-demo.orangehrmlive.com/", 'Admin', 'admin123'); 

describe('Login Page', () => {
    it('Verify page loads successfully',() => {
        testPage.gotoPageUrl();
        cy.get('#logInPanelHeading').should('be.visible');
    });

    it('Verify "Forgot your password" link works',() => {
        testPage.gotoPageUrl();
        testPage.clickForgotPasswordLink();
        cy.get('input[value="Reset Password"]').should('be.visible');
    });

    it('Verify login works',() => {
        testPage.gotoPageUrl();
        testPage.enterUsername();
        testPage.enterPassword();
        testPage.clickSubmit();
        cy.get('#welcome').should('be.visible');
    });
    
});

