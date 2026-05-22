import{test,expect} from '@playwright/test'
test.beforeEach('launching browser in playwright',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    })
const validData=require('../util/TestDataCredentials.json')//if it is from the same foder, just on dot(./). If it is from another folder, then double dot(../).
for(const data of validData){
    test(`Login with invalid credentials ${data.username} ${data.password}`, async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const username=page.locator("//input[@id='user-name']")
    await username.fill(data.username)
    const pswd=page.locator("//input[@id='password']")
    await pswd.fill(data.password)
    await page.locator("//input[@id='login-button']").click()
   // await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
})
}
