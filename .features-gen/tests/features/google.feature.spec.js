/** Generated from: tests\features\google.feature */
import { test } from "playwright-bdd";

test.describe("Google Feature", () => {

  test("navigate to Google", async ({ Given, page }) => {
    await Given("I navigate to Google Home Page \"https://www.google.com/\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\google.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "navigate to Google": {"pickleLocation":"4:5"},
};