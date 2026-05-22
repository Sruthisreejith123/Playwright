Feature:Login functionality
Scenario:Valid login
Given user is on login page
When user enter valid username "standard_user" and valid password "secret_sauce"          
Then user should see inventory page

@validation
Scenario:Invalid login
Given user is on login page
When user enter invalid username "standard_use" and password "secret_sauc"
Then user should see error message
