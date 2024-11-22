/** Generated from: tests\features\ruvy.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("Admin Onboard", () => {

  test("Verify admin is able to activate the account", async ({ Given, ruvyAdminLoginPage, And, Then }) => {
    await Given("I navigate to ruvy adimin url \"http://localhost:3000/ruvy/account/activate?uname=fe76a44e14e8f671b436b48bf4b38d4a\"", null, { ruvyAdminLoginPage });
    await And("I should verify username is filled with \"a.bhargav\"", null, { ruvyAdminLoginPage });
    await And("I enter the password \"Avish@123\"", null, { ruvyAdminLoginPage });
    await And("I enter the confirm password \"Avish@123\"", null, { ruvyAdminLoginPage });
    await And("I click on Activate button", null, { ruvyAdminLoginPage });
    await Then("I should see the success user activated success message", null, { ruvyAdminLoginPage });
    await And("I should be redirected to the URL \"http://localhost:3000/ruvy/onboard\"", null, { ruvyAdminLoginPage });
    await And("I upload an Excel file \"tests/Uploads/TechWaveSolutionsOnboard.xlsx\"", null, { ruvyAdminLoginPage });
    await Then("I should click the Save button", null, { ruvyAdminLoginPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\ruvy.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify admin is able to activate the account": {"pickleLocation":"5:5"},
};