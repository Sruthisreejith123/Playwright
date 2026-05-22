import{Page,Locator} from '@playwright/test'
export class LoginPage{
    page:Page
    username:Locator
    password:Locator
    loginButton:Locator
constructor(page:Page){
    this.page=page
    this.username=page.locator("//input[@id='user-name']")
    this.password=page.locator("//input[@id='password']")
    this.loginButton=page.locator("//input[@id='login-button']")
}
async goto(){
    await this.page.goto("https://www.saucedemo.com/")
    }
async login(username:string,password:string){
    await this.username.fill(username)
    await this.password.fill(password)
    }    
async clickLogin(){
    await this.loginButton.click()
}
}