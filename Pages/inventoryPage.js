export class InventoryPage{
constructor(page){
    this.page=page
    this.addToCart=page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']")
    this.goToCart=page.locator("//a[@data-test='shopping-cart-link']")
    this.checkOutPage=page.locator('#checkout')
    }  
   async addItem(){
    await this.addToCart.click()
   }
   async viewItem(){
    await this.goToCart.click()
   }
   async checkOut(){
    await this.checkOutPage.click()
    }
}