import {chromium, test} from '@playwright/test'

test("Filtering ",async () =>
{
    const browser= await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button',{name:/Login/}).click()

    await page.getByRole('listitem').filter({hasText:'PIM'}).click();

    await page.locator("//label[text()='Job Title']//following::div[@class='oxd-select-text--after'][1]").click();
    const values=await page.$$('[role="listbox"] >div> span') //page.locator()/page.$()//array 
    for(let val of values)
        {
        const option=await val.textContent();
        //console.log(option);
        if(option =='Chief Financial Officer')
            {
                await val.click();
                break;
        }
    }
      await page.waitForTimeout(5000)
})

//setTimeout(()=> {debugger;},5000)