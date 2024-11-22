Feature: change first name and last name
    User is able to change the First name and Last name
    
  Background:
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on My account
    And I enter E mail address "pranav@testroverautomation.com"
    And I enter password "Test1234"
    And I click on submit button
    Then I should verify url contains "route=account/account"

  Scenario: Verify user is able to login with valid credentials
    When I click on Edit your account information
    And I change the name to "Avish"
    And I change the last name to "Bhargav"
    And I click on continue button
    Then I should see success message "Success: Your account has been successfully updated."
  
  Scenario: change password
    When I click on Change your password button
    Then I should verify the url contains "route=account/password"
    And I click on the password and enter the new password
    And I click on the confirm password and re-enter the password
    And I click on the continue button
    Then I should see password updated success message "Success: Your password has been successfully updated."
 
  Scenario: change Address
    When I click on Modify your address book entries
    Then I should verify the address page url contains "route=account/address"
    And I click on the Edit button
    And I Fill all the required field
    And I click on continue button after address update
    Then I should see Adddress updated success message "Your address has been successfully updated"
    Then I click back button

  Scenario: Subscribe or unsubscribe
    When I click on Subscribe-unsubscribe to newsletter
    Then I should verify subscribe page url contains "route=account/newsletter"
    And I click on the radio button
    And I click on the continue button after subscription update
    Then I should see subscription upadte success message "Success: Your newsletter subscription has been successfully updated!"

