import{test,expect} from '@playwright/test' //test,expect is added to check Assertion ie actual expect verification . @playwright/test this is mandotory to run playwright
test('Browser Context Playwright Test', async({browser})=>{  //starting of test case .Here we indicte the browser. we gave browser fixture. added fixture in async.
const context=await browser.newContext() //to launch the browser
const page=await context.newPage() // to see a new tab 
await page.goto("https://selenium.qabible.in/") // to pass an url we use goto
})

//Simpler way
test.only('page playwright test', async({page})=>{ //adding Page fixture to open a new tab. test.only-it will exceute only the secong TC.Not both the first one and second one
    await page.goto("https://selenium.qabible.in/")
    const title=await page.title()
    console.log(title)
    await expect(page).toHaveTitle("Obsqura Testings") // assertion is used for evaluating actual and expected values
    })
