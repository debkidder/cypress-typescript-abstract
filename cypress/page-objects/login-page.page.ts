/// <reference types="cypress" />


export class LoginPage{
    username: string;
    password: string;

    constructor() {
        this.username = "Admin";
        this.password = "admin123";
    }

    gotoPageURL() {
        // set in tsconfig
        let url = Cypress.config().baseUrl;
        cy.visit(Cypress.config().baseUrl);
    }

    enterUsername() {
        return cy.get('input[id="txtUsername"]').type(this.username);
    }

    enterPassword() {
        return cy.get('input[id="txtPassword"]').type(this.password);
    }

    clickSubmit() {
        return cy.get('input[name="Submit"]').click();
    }

    // verifyLoginSuccess() {
    //     return cy.get('#welcome').should('be.visible');
    // }

 }



