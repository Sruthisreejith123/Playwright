/*import {Given,When,Then,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout} from '@cucumber/cucumber';
import{chromium} from "playwright";
import assert from 'assert';
setDefaultTimeout(30000)
let browser,context,page
BeforeAll(async()=>{
    browser=await chromium.launch({headless:false})
})
AfterAll(async()=>{
    await browser.close()
})
Before(async()=>{
    context=await browser.newContext()// to open a new tab in a launched browser
    page=await context.newPage()
})
After(async(scenario)=>{
    try{
        if(scenario.result.status===Status.FAILED){
            const screenshot=await page.screenshot()
            this.attach(screenshot,'image/png')
        }
    }
    catch(error){
        console.error('error taking screenshot',error)
    }
    finally{
        if(context){
            await context.close()
        }
    }
})
BeforeStep(async(step)=>{
    console.log(`${step.pickleStep.text}`)
}) 
AfterStep(async()=>{
    console.log(`${step.pickleStep.text}`)
})
Given('user is on application login page',async()=>{
    await page.goto("https://www.saucedemo.com/")
})
When('user logs in the username {string} and password {string}',async(username,password)=>{
    await page.fill("//input[@id='user-name']",username)
    await page.fill('#password',password)
    await page.click('#login-button')
})
Then('user should see {string}',async(result)=>{
    if(result==='Inventory Page'){
        await page.waitForSelector("//span[@data-test='title']")
    }
    else if(result==="Failure"){
        await page.waitForSelector("//h3[@data-test='error']")
    }
})
Then('inventory item count should be {string}',async(count)=>{
    if(count==='0')return
    const items=await page.locator('.inventory_item').count()
    assert.strictEqual(items,Number(count))

})*/
import {Given,When,Then,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout} from "@cucumber/cucumber";
import {chromium} from "playwright"
import assert from 'assert'
setDefaultTimeout(30000)
let browser
let context,page
BeforeAll(async()=>{
    browser=await chromium.launch({headless:false})
})
AfterAll(async()=>{
    await browser.close()
})
Before(async()=>{
    context=await browser.newContext() //to open a new tab in an opened browser
    page= await context.newPage()
})
After(async(scenario)=>{
    try {
        if(scenario.result.status===Status.FAILED)
            {
            const screenshot=await page.screenshot()
            this.attach(screenshot,'image/png')
            }
    } 
    catch (error)
     {
        console.error('error taking screenshot',error)
    }
    finally{
        if(context)
            {
         await context.close()
        }

    }

})
 BeforeStep(async(step)=>{
    console.log(`${step.pickleStep.text}`)// to get the text inside Given, When, Then
 })
 AfterStep(async(step)=>{
    console.log(`${step.pickleStep.text}`)
 })
 Given('user is on application login page',async()=>{

    await page.goto("https://www.saucedemo.com/")
 })
 When('user logs in the username {string} and password {string}',async(username,password)=>{
    await page.fill("//input[@id='user-name']",username)
    await page.fill('#password',password)
    await page.clicks('#login-button')
 })
 Then('user should see {string}',async(result)=>{
    if(result==='Inventory Page'){
        await page.waitForSelector("//span[@data-test='title']")
    }
    else if(result==="FAILURE")
    {
     await page.waitForSelector("//h3[@data-test='error']")
    }
 })
 Then('inventory item count should be {string}',async(count)=>{
    if(count==='0')return
    
const items=await page.locator('.inventory_item').count()
assert.strictEqual(items,Number(count))
 })