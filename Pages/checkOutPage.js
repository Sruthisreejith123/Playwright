export class CheckOutPage{
constructor(page){
    this.page=page
   this.firstname= page.locator('#first-name')
    this.lastname= page.locator('#last-name')
    this.postalcode= page.locator('#postal-code')
    this.continue=page.locator('#continue')
    this.finish= page.locator('#finish')
    }  
   async firstName(){
    await this.firstname.fill("Sruthi")
   }
   async lastName(){
    await this.lastname.fill("Sreejith")
   }
   async postalCode(){
    await this.postalcode.fill("560087")
    }
   async continueButton(){
    await this.continue.click()
    }
   async finishButton(){
    await this.finish.click()
    }
}

