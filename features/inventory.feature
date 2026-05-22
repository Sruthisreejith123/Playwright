Feature:Inventory Page
Scenario:Verify inventory item count for different user
Given user is on application login page
When user logs in the username "<username>" and password "<password>"
Then user should see "<result>"
And inventory item count should be "<count>"

Examples:
    | username        | password     | result         | count |
    | standard_user   | secret_sauce | Inventory Page | 6     |
    | locked_out_user | secret_sauce | Error          | 0     |
    | problem_user    | secret_sauce | Inventory Page | 6     |