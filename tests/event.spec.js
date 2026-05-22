import{test,expect} from '@playwright/test'
test('mouse actions in Playwright',async({page})=>{
   await page.goto("https://selenium.qabible.in/")
   const otherMenu=await page.locator("#others")
   await otherMenu.hover()
   //await otherMenu.click()
   //await otherMenu.dblclick()
   await otherMenu.click({button:'right'})


})