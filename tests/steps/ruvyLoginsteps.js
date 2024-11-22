import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixture";

const { Given, When, Then } = createBdd(test); 


Given('I navigate to ruvy adimin url {string}', async ({ruvyAdminLoginPage}, url) => {
    await ruvyAdminLoginPage.navigateToUrl(url);
  });
  
Given('I should verify username is filled with {string}', async ({ruvyAdminLoginPage}, username) => {
    await expect(ruvyAdminLoginPage.username_field).toHaveValue(username);
  });
  
Given('I enter the password {string}', async ({ruvyAdminLoginPage}, password) => {
    await ruvyAdminLoginPage.enterPassword(password);
  });

Given('I enter the confirm password {string}', async ({ruvyAdminLoginPage}, confmpassword) => {
    await ruvyAdminLoginPage.enterConfimPassword(confmpassword);
  });
  
Given('I click on Activate button', async ({ruvyAdminLoginPage}) => {
    await ruvyAdminLoginPage.accountActivate();
  });

Then('I should see the success user activated success message', async ({ruvyAdminLoginPage}) => {
    await ruvyAdminLoginPage.snackbarDisplay();
  });

  //file upload


Then('I should be redirected to the URL {string}', async ({ruvyAdminLoginPage}, onboardURL) => {
    await ruvyAdminLoginPage.navigateToUrl(onboardURL)
  });
  
Then('I upload an Excel file {string}', async ({ruvyAdminLoginPage}, filepath) => {
    // await expect(ruvyAdminLoginPage.getByText('Upload the organization')).toBeVisible();
    // await expect(ruvyAdminLoginPage.locator('div').filter({ hasText: /^Drag and drop a file here$/ })).toBeVisible();
     await ruvyAdminLoginPage.ClickUploadButton(filepath);
    // await expect(page.getByRole('button', { name: 'TechWaveSolutionsOnboard.xlsx' })).toBeVisible();

  });

Then('I should click the Save button', async ({ruvyAdminLoginPage}) => {
    await ruvyAdminLoginPage.clickSaveButton();
    

  });  