import{test,expect} from '@playwright/test';
/*test('dropdownTest InPlaywright', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  
  const dropdown1=page.locator("//select[@id='dropdowm-menu-1']")
 await dropdown1.selectOption({value:'python'})

  await dropdown1.selectOption({label:'Python'})
  //await dropdown1.selectOption("Python") - This is a shortcut which don't work always

  await dropdown1.selectOption({index:3})

})*/
test('checkBoxTest InPlaywright', async ({ page }) => {
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
const checkbox1=page.locator("//input[@value='option-1']")  
await checkbox1.click()
//OR
await checkbox1.check()
await checkbox1.uncheck()
console.log(await checkbox1.isChecked())




})
//selectionOption using value
//selectionOption using label/text
//selectionoption using index. Tagname is always select for dropdowns