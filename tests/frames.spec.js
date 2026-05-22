import{test,expect} from '@playwright/test'
test('Frames in Playwright', async ({ page }) => {
    await page.goto("https://demoqa.com/frames")
    const frame1=page.frameLocator("#frame1")//switched to frame using frame locator function
    console.log(await frame1.locator("#sampleHeading").textContent())

})
