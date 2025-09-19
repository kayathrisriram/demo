import {chromium, test} from '@playwright/test'

test("Set viewport",async () =>
    {
        const browser= await chromium.launch({headless:false});
        const context=await browser.newContext()
        const page=await context.newPage();

       // await page.goto("https://www.gmail.com");
        const width=await page.evaluate(()=>{
            return window.screen.width
        })
        console.log(width)
        const height=await page.evaluate(()=>{
            return window.screen.height
        })
        console.log(height)
        // await page.setViewportSize({width,height})//max browser testing 
        await page.goto("https://www.gmail.com");


        await page.waitForTimeout(5000)
    })
