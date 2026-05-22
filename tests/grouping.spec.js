import {test,expect} from '@playwright/test'

test.beforeEach('launching browser in playwright', async({page})=>{
await page.goto("https://www.saucedemo.com/")
})

test('@smoke Login with valid username/pswd credentials',async({page})=>{
    const user= page.locator('#user-name')
    await user.fill("standard_user")
    const password = page.locator('#password')
    await password.fill("secret_sauce")
    const login = page.locator("//input[@type='submit']").click()
    //await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
    //await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
})
test('@smoke Login with invalid username/valid pswd credentials',async({page})=>{
    const user= page.locator('#user-name')
    await user.fill("standard_use")
    const password = page.locator('#password')
    await password.fill("secret_sauce")
    const login = page.locator("//input[@type='submit']").click()
    //await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
    //await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
})
test('Login with invalid pswd/valid username credentials',async({page})=>{
    const user= page.locator('#user-name')
    await user.fill("standard_user")
    const password = page.locator('#password')
    await password.fill("secret_sauc")
    const login = page.locator("//input[@type='submit']").click()
    //await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
    //await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
})
test('Login with invalid pswd and invalid username credentials',async({page})=>{
    const user= page.locator('#user-name')
    await user.fill("standard_use")
    const password = page.locator('#password')
    await password.fill("secret_sauc")
    const login = page.locator("//input[@type='submit']").click()
    //await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
    //await expect(page.locator("//h3[@data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
})
// to execute write the command npx playwright test --grep "@smoke"