"use strict";
/// <reference types="cypress" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BasePage = /** @class */ (function () {
    function BasePage(pageUrl, username, password) {
        this.pageUrl = pageUrl;
        this.username = username;
        this.password = password;
    }
    return BasePage;
}());
exports.BasePage = BasePage;
// not very useful having this in same page, but otherwise it gets an error
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(pageUrl, username, password) {
        return _super.call(this, pageUrl, username, password) || this;
    }
    LoginPage.prototype.getPageUrl = function () {
        return cy.get(this.pageUrl);
    };
    LoginPage.prototype.gotoPageUrl = function () {
        return cy.visit(this.pageUrl);
    };
    LoginPage.prototype.enterUsername = function () {
        return cy.get('input[id="txtUsername"]').type(this.username);
    };
    LoginPage.prototype.enterPassword = function () {
        return cy.get('input[id="txtPassword"]').type(this.password);
    };
    LoginPage.prototype.clickSubmit = function () {
        return cy.get('input[name="Submit"]').click();
    };
    LoginPage.prototype.clickForgotPasswordLink = function () {
        return cy.get("#forgotPasswordLink > a").click();
    };
    return LoginPage;
}(BasePage));
exports.LoginPage = LoginPage;
var thePage = new LoginPage("https://opensource-demo.orangehrmlive.com/", 'Admin', 'admin123');

//# sourceMappingURL=pages.page.js.map
