/** Generated from: tests\features\ecomlogin.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("verify login", () => {

  test("Verify user is able to login with valid credentials", async ({ Given, ecomLoginPage, And, Then }) => {
    await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
    await And("I click on My account", null, { ecomLoginPage });
    await And("I enter E mail address \"pranav@testroverautomation.com\"", null, { ecomLoginPage });
    await And("I enter password \"Test1234\"", null, { ecomLoginPage });
    await And("I click on submit button", null, { ecomLoginPage });
    await Then("I should verify url contains \"route=account/account\"", null, { ecomLoginPage });
  });

  test.describe("Verify user is not able login with following credentails", () => {

    test("Example #1", async ({ Given, ecomLoginPage, And, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E mail address \"xyz@gmail.com\"", null, { ecomLoginPage });
      await And("I enter password \"Test@123\"", null, { ecomLoginPage });
      await And("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to loggin and url contains \"route=account/login\"", null, { ecomLoginPage });
    });

    test("Example #2", async ({ Given, ecomLoginPage, And, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E mail address \"abc@gmail.com\"", null, { ecomLoginPage });
      await And("I enter password \"Test@abc\"", null, { ecomLoginPage });
      await And("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to loggin and url contains \"route=account/login\"", null, { ecomLoginPage });
    });

    test("Example #3", async ({ Given, ecomLoginPage, And, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E mail address \"abcd@gmail.com\"", null, { ecomLoginPage });
      await And("I enter password \"Test@abcd\"", null, { ecomLoginPage });
      await And("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to loggin and url contains \"route=account/login\"", null, { ecomLoginPage });
    });

    test("Example #4", async ({ Given, ecomLoginPage, And, Then }) => {
      await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
      await And("I click on My account", null, { ecomLoginPage });
      await And("I enter E mail address \"abcde@gmail.com\"", null, { ecomLoginPage });
      await And("I enter password \"Test@abcde\"", null, { ecomLoginPage });
      await And("I click on submit button", null, { ecomLoginPage });
      await Then("I should verify user is not able to loggin and url contains \"route=account/login\"", null, { ecomLoginPage });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\ecomlogin.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify user is able to login with valid credentials": {"pickleLocation":"5:5"},
  "Verify user is not able login with following credentails|Example #1": {"pickleLocation":"22:13"},
  "Verify user is not able login with following credentails|Example #2": {"pickleLocation":"23:13"},
  "Verify user is not able login with following credentails|Example #3": {"pickleLocation":"24:13"},
  "Verify user is not able login with following credentails|Example #4": {"pickleLocation":"25:13"},
};