import{test,expect} from '@playwright/test'
test.only('WaitTest', async({page})=>{ 
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    //await is used to wait line by line.async-asyncronous fn. when buffering a site,it will take some time to load elements.this time we can use this wait method 'waitForLoadState', we are giving this manually
    await page.waitForLoadState("networkidle")
    const showMessage=page.locator('#button-one')  
    await showMessage.click()

})