import{test,expect} from '@playwright/test'
test('multipleWindowInPlaywrightTest',async({page,context})=>{
await page.goto("https://demo.guru99.com/popup.php")
const popup= context.waitForEvent('page')//wait for a new page to open . here we are storing it to a variable called pop up.waitForEvent is stored here to call  whenever we want to use
const clickHere=page.locator("//a[text()='Click Here']")
await clickHere.click()
const childpage=await popup //calling  waitForEvent method
await childpage.waitForLoadState() //wait for the new page to open and to ensure all the elements loaded in the new pop up page
const email= childpage.locator("//input[@name='emailid']")
await email.fill("abc@gmail.com")
const submitbutton=childpage.locator("//input[@name='btnLogin']")
submitbutton.click()

//retry mechanism- when a test case failed due to network issues, it will execute again..max 3 times. used mainly for re executing the flaky testcase



}
)