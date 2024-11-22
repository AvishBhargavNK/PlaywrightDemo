import { expect } from "@playwright/test";
import exp from "constants";

class EcomLoginPage{
    constructor(page){
        this.page = page;
        this.my_account_btn = page.getByRole('button', {name: ' My account'});
        this.email_box = page.getByPlaceholder('E-Mail Address');
        this.password_box = page.getByPlaceholder('Password');
        this.submit_btn = page.locator("//input[@value='Login']");
    }

    async navigateToUrl(url){
        await this.page.goto(url);
    }
    async clickOnMyAccount(){
        await this.my_account_btn.click();

    }
    async enterEmailAddress(emailAddress){
        // await this.email_box.waitFor({state:"visiable",timeout:10000});
        await this.email_box.fill(emailAddress);
    }
    async enterPassword(password){
        await this.password_box.fill(password);
    }
    async clickOnSubmit(){
        await this.submit_btn.click();
    }
    async verifyUserLandOnAccountPage(loggedUrl){
        await expect(this.page).toHaveURL(new RegExp(loggedUrl));
    }
    async verifyUserNotLandedOnAccountPage(loginUrl){
        await expect(this.page).toHaveURL(new RegExp(loginUrl));
    }
}

export {EcomLoginPage};