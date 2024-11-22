import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture'
import exp from "constants";
import { expect } from "@playwright/test";
import { EcomChangePage } from "../pages/ecom_changeNameObj";

const { Given, When, Then } = createBdd(test);

// 1. Missing step definition for "tests\features\changeName.feature:12:5"
When('I click on Edit your account information', async ({ ecomChangePage }) => {
  await ecomChangePage.clickOnEditMyAccount();
});

// 2. Missing step definition for "tests\features\changeName.feature:13:5"
When('I change the name to {string}', async ({ ecomChangePage }, firstnm) => {
  await ecomChangePage.editFirstName(firstnm);
});

// 3. Missing step definition for "tests\features\changeName.feature:14:5"
When('I change the last name to {string}', async ({ ecomChangePage }, lastnm) => {
  await ecomChangePage.editLastName(lastnm);
 
});

When('I click on continue button', async ({ ecomChangePage }) => {
  await ecomChangePage.clickOnContinue(); 
});

Then('I should see success message {string}', async ({ ecomChangePage }, message) => {
  await expect(ecomChangePage.success_Message).toContainText(new RegExp(message))

});

When('I click on Change your password button', async ({ecomChangePage}) => {
  await ecomChangePage.clickOnChangePassword();
});

Then('I should verify the url contains {string}', async ({ecomChangePage}, pwdURL) => {
  await ecomChangePage.VerifyPasswordUrl(pwdURL);
});

Then('I click on the password and enter the new password', async ({ecomChangePage}) => {
  await ecomChangePage.enterPassword();
});

Then('I click on the confirm password and re-enter the password', async ({ecomChangePage}) => {
  await ecomChangePage.enterConfirmPassword();
});

Then('I click on the continue button', async ({ecomChangePage}) => {
  await ecomChangePage.clickOnContinue();
});

Then('I should see password updated success message {string}', async ({ ecomChangePage }, passwordMessage) => {
  await expect(ecomChangePage.password_success).toContainText(new RegExp(passwordMessage))
 });

//change address


When('I click on Modify your address book entries', async ({ecomChangePage}) => {
  await ecomChangePage.clickOnChangeAddress();
});

Then('I should verify the address page url contains {string}', async ({ecomChangePage}, addrsURL) => {
  await ecomChangePage.verifyAddressUrl(addrsURL);
});


Then('I click on the Edit button', async ({ecomChangePage}) => {
  await ecomChangePage.clickOnEdit();
});

Then('I Fill all the required field', async ({ecomChangePage}) => {
  await ecomChangePage.fillTheRequired();
});


When('I click on continue button after address update', async ({ ecomChangePage }) => {
  await ecomChangePage.clickOnContinue();
});

Then('I should see Adddress updated success message {string}', async ({ecomChangePage}, addressMessage) => {
  await expect(ecomChangePage.addressUpdate_success).toContainText(new RegExp(addressMessage));

});


Then('I click back button', async ({ecomChangePage}) => {
  await ecomChangePage.bacKButton();
});

///////////////

When('I click on Subscribe-unsubscribe to newsletter', async ({ecomChangePage}) => {
  await ecomChangePage.Subscribe();
});


Then('I should verify subscribe page url contains {string}', async ({ecomChangePage}, subURL) => {
 await ecomChangePage.VerifySubscriptionUrl(subURL);
});


Then('I click on the radio button', async ({ecomChangePage}) => {
  await ecomChangePage.unsubscribe();
});


Then('I click on the continue button after subscription update', async ({ecomChangePage}) => {
  await ecomChangePage.clickOnContinue();
});


Then('I should see subscription upadte success message {string}', async ({ecomChangePage}, SubSuccess) => {
  await expect(ecomChangePage.subscription_success).toContainText(new RegExp(SubSuccess));
});