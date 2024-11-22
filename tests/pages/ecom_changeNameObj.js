import { expect } from "@playwright/test";
import exp from "constants";

export class EcomChangePage{
    constructor(page){
        this.page = page;
        this.editAccount = page.getByRole('link', {name: 'Edit your account information'});
        this.FirstName_box = page.getByPlaceholder('First Name');
        this.LastName_box = page.getByPlaceholder('Last Name');
        this.continue_btn = page.locator("//input[@value='Continue']");
        this.success_Message = page.getByText("Success: Your account has been successfully updated.");
        //password change
        this.change_password = page.getByRole('link', { name: 'Change your password'});
        this.password_field = page.getByPlaceholder('Password', { exact: true })
        this.confirm_password = page.getByPlaceholder('Password Confirm');
        this.password_success = page.getByText('Success: Your password has been successfully updated.');
        //address change
        this.change_address = page.getByRole('link', { name: 'Modify your address book' });
        this.address_edit_btn = page.getByRole('link', { name: 'Edit', exact: true });
        this.companyName_field = page.getByPlaceholder('Company');
        this.address1_field = page.getByPlaceholder('Address 1');
        this.city_field = page.getByPlaceholder('City');
        this.country_field = page.getByLabel('Country');
        this.region_field = page.getByLabel('Region / State');
        this.addressUpdate_success = page.getByText('Your address has been successfully updated');
        this.back_button = page.getByRole('link', { name: 'Back' });
        //subscribe
        this.subscribe_btn = page.getByRole('link', { name: 'Subscribe / unsubscribe to' });
        this.no_btn = page.getByText('No', { exact: true });
        this.subscription_success = page.getByText('Success: Your newsletter subscription has been successfully updated!');
    }
     
    async clickOnEditMyAccount(){
        await this.editAccount.click();
    }
    async editFirstName(firstName){
        await this.FirstName_box.fill(firstName)
    }async editLastName(lastName){
        await this.LastName_box.fill(lastName)
    }
    async clickOnContinue(){
        await this.continue_btn.click();
    }

    //change password
    async clickOnChangePassword(){
        await this.change_password.click();
    }
    async VerifyPasswordUrl(passwordURL){
        await expect(this.page).toHaveURL(new RegExp(passwordURL));

    }
    async enterPassword(){
        await this.password_field.click();
        await this.password_field.fill("Test1234");
    }
    async enterConfirmPassword(){
        await this.confirm_password.click();
        await this.confirm_password.fill("Test1234")
    }

    //change address
    async clickOnChangeAddress(){
        await this.change_address.click();
    }
    async verifyAddressUrl(addressURL){
        await expect(this.page).toHaveURL(new RegExp(addressURL));
    }
    async clickOnEdit(){
        await this.address_edit_btn.click();
    }
    async fillTheRequired(){
        await this.FirstName_box.fill("Avish");
        await this.LastName_box.fill("Bhargav");
        await this.address1_field.fill("Paravur");
        await this.city_field.fill("Ernakulam");
        await this.country_field.click();
        await this.country_field.selectOption({label: "India"});
        await this.region_field.click();
        await this.region_field.selectOption({label: "Kerala"});
    }
    async bacKButton(){
        await this.back_button.click();
    }

    //subscription
    async VerifySubscriptionUrl(subscribeURL){
        await expect(this.page).toHaveURL(new RegExp(subscribeURL));
    }

    async Subscribe(){
        await this.subscribe_btn.click();
    }
    async unsubscribe(){
        await this.no_btn.click();
    }
}