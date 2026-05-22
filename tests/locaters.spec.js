import{test,expect} from '@playwright/test'
test.only('Locators PW test', async({page})=>{ //adding Page fixture to open a new tab. test.only-it will exceute only the secong TC.Not both the first one and second one
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    const messageField=page.locator('#single-input-field')   //# is using to indicate id is loacting here
    page.locator('.form-control')// to find the class we are using dot
    await messageField.fill("Hello")//It will clear the existing message and fill the new text
    await messageField.type("hello")//it will add the new value with the existing values in the text box
    //find show message button and click
   // const showMessage=page.locator('#button-one')  
   // await showMessage.click()
    const showMessageXpath=page.locator("//button[@id='button-one']")
    await showMessageXpath.click()
    //Special Locators:used in ARI Applications.(Accessible Rich Internet Application) recently release applications are ARI applications
})

//Special Locators:used in ARI Applications.(Accessible Rich Internet Application) recently release applications are ARI applications
import{test,expect} from '@playwright/test'
test.only('SPECIAL Locators PW test', async({page})=>{ //adding Page fixture to open a new tab. test.only-it will exceute only the secong TC.Not both the first one and second one
    await page.goto("https://groceryapp.uniqassosiates.com/admin/login")
    const username=page.locator("//input[@name='username']")
    //await username.click()
    await username.fill("admin")
    const password=page.locator("//input[@name='password']")
    //await password.click()
    await password.fill("admin")
    const signIn=page.locator("//button[@type='submit']")
    await signIn.click()

    //Special locatores use getbyRole() function getByRole(role,{name:'text'})
    await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin")
    await page.getByRole('button',{name:'Active'}).nth(0).click()

    //Locating elements by Text using getByText()
    await page.getByText('Active').nth(1).click()

    





})

