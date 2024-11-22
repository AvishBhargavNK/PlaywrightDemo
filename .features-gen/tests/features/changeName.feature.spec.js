/** Generated from: tests\features\changeName.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("change first name and last name", () => {

  test.beforeEach(async ({ Given, ecomLoginPage, And, Then }) => {
    await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { ecomLoginPage });
    await And("I click on My account", null, { ecomLoginPage });
    await And("I enter E mail address \"pranav@testroverautomation.com\"", null, { ecomLoginPage });
    await And("I enter password \"Test1234\"", null, { ecomLoginPage });
    await And("I click on submit button", null, { ecomLoginPage });
    await Then("I should verify url contains \"route=account/account\"", null, { ecomLoginPage });
  });

  test("Verify user is able to login with valid credentials", async ({ When, ecomChangePage, And, Then }) => {
    await When("I click on Edit your account information", null, { ecomChangePage });
    await And("I change the name to \"Avish\"", null, { ecomChangePage });
    await And("I change the last name to \"Bhargav\"", null, { ecomChangePage });
    await And("I click on continue button", null, { ecomChangePage });
    await Then("I should see success message \"Success: Your account has been successfully updated.\"", null, { ecomChangePage });
  });

  test("change password", async ({ When, ecomChangePage, Then, And }) => {
    await When("I click on Change your password button", null, { ecomChangePage });
    await Then("I should verify the url contains \"route=account/password\"", null, { ecomChangePage });
    await And("I click on the password and enter the new password", null, { ecomChangePage });
    await And("I click on the confirm password and re-enter the password", null, { ecomChangePage });
    await And("I click on the continue button", null, { ecomChangePage });
    await Then("I should see password updated success message \"Success: Your password has been successfully updated.\"", null, { ecomChangePage });
  });

  test("change Address", async ({ When, ecomChangePage, Then, And }) => {
    await When("I click on Modify your address book entries", null, { ecomChangePage });
    await Then("I should verify the address page url contains \"route=account/address\"", null, { ecomChangePage });
    await And("I click on the Edit button", null, { ecomChangePage });
    await And("I Fill all the required field", null, { ecomChangePage });
    await And("I click on continue button after address update", null, { ecomChangePage });
    await Then("I should see Adddress updated success message \"Your address has been successfully updated\"", null, { ecomChangePage });
    await Then("I click back button", null, { ecomChangePage });
  });

  test("Subscribe or unsubscribe", async ({ When, ecomChangePage, Then, And }) => {
    await When("I click on Subscribe-unsubscribe to newsletter", null, { ecomChangePage });
    await Then("I should verify subscribe page url contains \"route=account/newsletter\"", null, { ecomChangePage });
    await And("I click on the radio button", null, { ecomChangePage });
    await And("I click on the continue button after subscription update", null, { ecomChangePage });
    await Then("I should see subscription upadte success message \"Success: Your newsletter subscription has been successfully updated!\"", null, { ecomChangePage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\changeName.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify user is able to login with valid credentials": {"pickleLocation":"12:3"},
  "change password": {"pickleLocation":"19:3"},
  "change Address": {"pickleLocation":"27:3"},
  "Subscribe or unsubscribe": {"pickleLocation":"36:3"},
};