//By id- site: https://selenium.qabible.in/simple-form-demo.php
await page.locator('#attributevalue of id')
//By class
await page.locator('.form-control')
//By name
await page.locator('[name="viewport"]')
//by css selector.
//Combination of id and attribute
await page.locator('button[data-toggle="collapse"]')//syntax:tagname[attribulte type="attribute value"]
//getByRole() and getByText()
//By text
await page.locator("//button[text()='Show Message']")
//dynamic xpath
await page.locator("//button[contains(@id,'button')]")
//by index
await page.locator("(//input[@type='text'])[1]")
await page.locator("(//button[text()='Add to cart'])[4]")
//By axes method-parent
await page.loactor("//input[@id='single-input-field']/parent::div")
//By axes method-child
await page.locator("//div[@class='form-group']//child::input[@id='single-input-field']")
//By axes method-sibling
await page.locator("//label[text()='Enter Message']/following-sibling::input")
//By axes method-ancestor
await page.locator("//input[@id='single-input-field']/ancestor::div[@class='card']")