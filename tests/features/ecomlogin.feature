Feature: verify login

    Verify user is able to login with valid and invalid credentials
    
    Scenario: Verify user is able to login with valid credentials
        Given I navigate to "https://ecommerce-playground.lambdatest.io/"
        And I click on My account
        And I enter E mail address "pranav@testroverautomation.com"
        And I enter password "Test1234"
        And I click on submit button
        Then I should verify url contains "route=account/account"

    Scenario Outline: Verify user is not able login with following credentails
        Given I navigate to "https://ecommerce-playground.lambdatest.io/"
        And I click on My account
        And I enter E mail address "<emailaddress>"
        And I enter password "<password>"
        And I click on submit button
        Then I should verify user is not able to loggin and url contains "route=account/login"
        Examples:
            | emailaddress | password |
            | xyz@gmail.com  | Test@123  | 
            | abc@gmail.com  | Test@abc  | 
            | abcd@gmail.com  | Test@abcd  | 
            | abcde@gmail.com  | Test@abcde  | 