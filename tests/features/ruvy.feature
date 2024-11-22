Feature: Admin Onboard

    Verify Admin Onboarding is successfull
    
    Scenario: Verify admin is able to activate the account
        Given I navigate to ruvy adimin url "http://localhost:3000/ruvy/account/activate?uname=fe76a44e14e8f671b436b48bf4b38d4a"
        And I should verify username is filled with "a.bhargav"
        And I enter the password "Avish@123"
        And I enter the confirm password "Avish@123"
        And I click on Activate button
        Then I should see the success user activated success message
        
         # New steps for handling page redirection and file upload
        And I should be redirected to the URL "http://localhost:3000/ruvy/onboard"
        And I upload an Excel file "tests/Uploads/TechWaveSolutionsOnboard.xlsx"
        Then I should click the Save button
        


    
