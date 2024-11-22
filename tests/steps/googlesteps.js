import { createBdd } from "playwright-bdd";


const { Given, When, Then } = createBdd();


// 1. Missing step definition for "tests\features\google.feature:5:5"
Given('I navigate to Google Home Page {string}', async ({page}, arg) => {
    await page.goto(arg)
  });