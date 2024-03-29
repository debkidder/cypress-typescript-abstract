"use strict";
exports.__esModule = true;
var pages_page_1 = require("../../page-objects/pages.page");
var testPage = new pages_page_1.LoginPage("https://opensource-demo.orangehrmlive.com/", 'Admin', 'admin123');
describe('Login Page', function () {
    it('Verify page loads successfully', function () {
        testPage.gotoPageUrl();
        cy.get('#logInPanelHeading').should('be.visible');
    });
    it('Verify "Forgot your password" link works', function () {
        testPage.gotoPageUrl();
        testPage.clickForgotPasswordLink();
        cy.get('input[value="Reset Password"]').should('be.visible');
    });
    it('Verify login works', function () {
        testPage.gotoPageUrl();
        testPage.enterUsername();
        testPage.enterPassword();
        testPage.clickSubmit();
        cy.get('#welcome').should('be.visible');
    });
});

//# sourceMappingURL=login-tests.spec.js.map
