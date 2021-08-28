/// <reference types="cypress" />

export abstract class BasePage {

    constructor(public pageUrl: string, public username: string, public password: string) {
    }
    
    abstract getPageUrl(): void;
    abstract gotoPageUrl(): void;

}

// not very useful having this in same page, but otherwise it gets an error
export class LoginPage extends BasePage {
    constructor( pageUrl: string, username: string, password: string) {
        super(pageUrl, username, password);
    }
        
    getPageUrl() {
        return cy.get(this.pageUrl); 
    }

    gotoPageUrl() {
        return cy.visit(this.pageUrl); 
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

    clickForgotPasswordLink() {
        return cy.get("#forgotPasswordLink > a").click();
    }
}

let thePage = new LoginPage("https://opensource-demo.orangehrmlive.com/", 'Admin', 'admin123');



