import {test,expect} from '@playwright/test'
test('visualtesting',async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    await page.waitForLoadState('networkidle')
    await page.locator('.carousel.slide').evaluate((element)=>{//there shouln't be a space when using a class attribute. so we need to use dot(.)to remove the space.
        element.style.display='none' //to hide the element which is dynamic in nature
    })
    await expect(page).toHaveScreenshot('qabibble.png',{threshold:0.02})
})
