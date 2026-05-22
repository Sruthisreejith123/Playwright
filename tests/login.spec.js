import{test,expect} from '@playwright/test'
import{getData} from '../util/ExcelRead2.js'
test.beforeEach('launching browser in playwright',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    })
const validData=require('../util/TestDataCredentials.json')//if it is from the same foder, just on dot(./). If it is from another folder, then double dot(../).
test("Login with valid credentials", async({page})=>{
    const username1=validData.username
    const password1=validData.password

    await page.goto("https://www.saucedemo.com/")
    const username=page.locator("//input[@id='user-name']")
    await username.fill(username1)

    const pswd=page.locator("//input[@id='password']")
    await pswd.fill(password1)

    await page.locator("//input[@id='login-button']").click()
    await expect(page.locator("//div[text()='Swag Labs']")).toHaveText("Swag Labs")
    
})

test.only('Login with invalid credentials',async({page})=>{
    const username=getData('loginPage',0,1)
    const password1=getData('loginPage',2,2)
    const user= page.locator('#user-name')
    await user.fill(username)
    const password = page.locator('#password')
    await password.fill(password1)
    const login = page.locator("//input[@type='submit']").click()
    //await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
    await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
})
