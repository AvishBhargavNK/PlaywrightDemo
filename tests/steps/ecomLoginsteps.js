import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixture";

const { Given, When, Then } = createBdd(test); 


Given('I navigate to {string}', async ({ ecomLoginPage }, url) => {
    await ecomLoginPage.navigateToUrl(url);
  });
  
  
  Given('I click on My account', async ({ ecomLoginPage }) => {
    await ecomLoginPage.clickOnMyAccount();
  });
  
  
  Given('I enter E mail address {string}', async ({ ecomLoginPage }, emailAddress) => {
    await ecomLoginPage.enterEmailAddress(emailAddress);
    
  });
  
  
  Given('I enter password {string}', async ({ ecomLoginPage }, password) => {
    await ecomLoginPage.enterPassword(password);
  });

  
  Given('I click on submit button', async ({ ecomLoginPage },submitButton) => {
    await ecomLoginPage.clickOnSubmit();
  });
  
  
  Then('I should verify url contains {string}', async ({ ecomLoginPage}, loggedUrl) => {
    await ecomLoginPage.verifyUserLandOnAccountPage(loggedUrl);
  });


Then('I should verify user is not able to loggin and url contains {string}', async ({ecomLoginPage}, loginUrl) => {
  await ecomLoginPage.verifyUserNotLandedOnAccountPage(loginUrl);
});