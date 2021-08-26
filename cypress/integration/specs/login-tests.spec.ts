
import { LoginPage } from '../../page-objects/login-page.page';
const homePage = new LoginPage();

describe('Loads Page', () => {
    it('Login Page',() => {
        homePage.gotoPageURL();
        homePage.enterUsername();
        homePage.enterPassword();
        homePage.clickSubmit();
        //homePage.verifyLoginSuccess().should('be.visible');
        cy.get('#welcome').should('be.visible');
    });
});

