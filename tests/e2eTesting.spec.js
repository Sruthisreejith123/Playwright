import {test,expect } from '@playwright/test'
test('E2E Testing In Playwright',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const username=page.locator("//input[@id='user-name']")
    await username.fill("standard_user")
    const pswd=page.locator("//input[@id='password']")
    await pswd.fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click()
    await page.waitForLoadState("networkidle")
    await page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']").click()
    await page.locator("//a[@data-test='shopping-cart-link']").click()
    await page.locator('#checkout').click()
    await page.locator('#first-name').fill("Sruthi")
    await page.locator('#last-name').fill("Sreejith")
    await page.locator('#postal-code').fill("560087")
    await page.locator('#continue').click()
    await page.locator('#finish').click()
    await expect(page.locator("//h2[@data-test='complete-header']")).toHaveText("Thank you for your order!")
})


/*login to https://www.saucedemo.com/
username
password
and login button createPublicKey then add to cart
click the cart Symbol
at checkout getActiveResourcesInfo, firt name, last name, continue finish*/