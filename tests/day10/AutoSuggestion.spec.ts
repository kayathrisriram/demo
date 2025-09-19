import {chromium, test} from '@playwright/test'

test("autosuggestion ",async () =>
{
    const browser= await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.google.com");
   await page.fill("[aria-label='Search']","playwright")
    await page.waitForSelector("//div[@role='presentation']//li//div[@role='option']")
    const values=await page.$$("//div[@role='presentation']//li//div[@role='option']")
    for(let val of values)
        {
        const option=await val.textContent();
        console.log(option);
        if(option =='playwright pronunciation')
            {
                await val.click();
                break;
        }
    }
      await page.waitForTimeout(5000)
})