import {test,expect} from '@playwright/test'
test('visualtesting',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('saucedemo.png',{threshold:0.02})
    //threshold is a percentage of pixcels that can be different between the baseline and the current screenshot for the testpass
    //In this case it allows for a 2% difference in pixcels
})