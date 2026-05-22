import{expect,test} from '@playwright/test'
import{LoginPage} from '../Pages/loginPageMain'
test('Login page test',async({page})=>{
    const loginpage = new LoginPage(page)
    await loginpage.goto()
    await loginpage.login("standard_user","secret_sauce")
    await loginpage.clickLogin()
    //await expect(page.locator("//div[@class='login_logo']")).toHaveText("Swag Labs")
    await expect(page.locator("//div[text()='Swag Labs']")).toHaveText("Swag Labs")
    //await expect(page).toHaveTitle('Swag Labs')
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})
