import{getData} from '../util/ExcelRead.js'
import{expect,test} from '@playwright/test'
import{LoginPage} from '../Pages/loginPage'

//Reading from Excel
const credentials=getData()
test.only('LoginPageTest',async({page})=>{
    for(const data of credentials){
    const loginpage=new LoginPage(page)// calling consrtuctor to fetch all the details of login page
    await loginpage.goto()
    await loginpage.login(data.username,data.password)
    await loginpage.clickLogin()
    //await expect(page).toHaveTitle("Swag Labs")
    //await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    //await expect(page.locator("//div[text()='Swag Labs']")).toHaveText("Swag Labs")
    }
})
test('LoginPageTest1',async({page})=>{
    const loginpage=new LoginPage(page)// calling consrtuctor to fetch all the details of login page
    await loginpage.goto()
    await loginpage.login("standard_use","secret_sauce")
    await loginpage.clickLogin()
     await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
})

test('LoginPageTest2',async({page})=>{
    const loginpage=new LoginPage(page)// calling consrtuctor to fetch all the details of login page
    await loginpage.goto()
    await loginpage.login("standard_user","secret_sauc")
    await loginpage.clickLogin()
     await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
})
//2 test cases and assertion