import{expect,test} from '@playwright/test'
import{LoginPage} from '../Pages/loginPage'
import{InventoryPage} from '../Pages/inventoryPage'
import { CheckOutPage } from '../Pages/checkOutPage'
test('LoginPageTest',async({page})=>{
    const loginpage=new LoginPage(page)
    const inventorypage=new InventoryPage(page)
    const checkoutpage=new CheckOutPage(page)
    await loginpage.goto()
    await loginpage.login("standard_user","secret_sauce")
    await loginpage.clickLogin()
    
    await inventorypage.addItem()
    await inventorypage.viewItem()
    await inventorypage.checkOut()

    await checkoutpage.firstName()
    await checkoutpage.lastName()
    await checkoutpage.postalCode()
    await checkoutpage.continueButton()
    await checkoutpage.finishButton()

    await expect(page.locator("//h2[@data-test='complete-header']")).toHaveText("Thank you for your order!")
    //await expect(page.locator("//button[@id='continue-shopping']")).toHaveId('continue-shopping')
})