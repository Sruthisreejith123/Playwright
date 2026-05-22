import{test,expect} from '@playwright/test'
test('Calendar Validation', async({page})=>{

    page.goto("https://selenium.qabible.in/date-picker.php")
    const enterDate=page.locator('#single-input-field')
    await enterDate.click()
    const targetYear=1995
    await expect(page.locator('.datepicker-dropdown')).toBeVisible()
    const switchButton= page.locator('.datepicker-switch:visible')//
    await switchButton.click()//change to month
    await switchButton.click()//change to year
    let attempts=10
    while(attempts--){
        const decade=await switchButton.innerText()//["2020","2029"]
        const startYear=parseInt(decade.split('-')[0].trim())//2020-2029 parseInt-converting String into Int
        if(targetYear>=startYear&&targetYear<=startYear+9) break
        await page.locator('.prev:visible').click()
    }
    await page.locator('.year:visible').filter({hasText:'1995'}).click()
    await page.locator('.month:visible').filter({hasText:'May'}).click()
    await page.locator('.day:visible').filter({hasText:'22'}).click()
    await page.locator('#button-one').click()
})