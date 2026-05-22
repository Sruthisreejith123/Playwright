import{test,expect} from '@playwright/test'
import{getData} from '../util/ExcelRead2.js'

test.beforeEach('launching browser in playwright',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    })

test('ExcelDataFetchingRowColumnWise',async({page})=>{
    const username=getData('loginPage',2,1)
    const password1=getData('loginPage',2,2)
    
    const user= page.locator('#user-name')
    await user.fill(username)
    const password = page.locator('#password')
    await password.fill(password1)
    const login = page.locator("//input[@type='submit']").click()
    //await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
    //await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
})