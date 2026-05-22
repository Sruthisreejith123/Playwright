import {test,expect} from '@playwright/test'
test('Alert',async({page,context})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on('dialog',async dialog=>{  //to listen the dialog pop up
expect(dialog.message()).toBe('I am a Javascript alert box!')
await dialog.accept()
})
const clickme=await page.locator("//button[@onclick='jsAlert()']")

await clickme.click()
})

test.only('Prompt Alert', async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    page.on('dialog',async dialog=>{
        console.log(dialog.message())
        await dialog.accept('Hello')
        //dialog.dismiss()- to cancel the pop up

    })
    const promptAlert= await page.locator("//button[text()='Click for Prompt Box']").click()
})
