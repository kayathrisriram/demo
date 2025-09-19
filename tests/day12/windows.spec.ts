import {chromium, test,expect} from '@playwright/test'

test("New Page",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();

    const page1=await context.newPage()

    const page2=await context.newPage()

    const totalpage=context.pages();

    console.log(totalpage.length)//number of pages active -context

    await page1.goto('https://testautomationpractice.blogspot.com/')

    await expect(page1).toHaveTitle('Automation Testing Practice')

    await page2.goto('https://ui.vision/demo/webtest/frames')

    await page1.bringToFront() 
    await page1.waitForTimeout(8000)

    await page2.bringToFront()
    await page2.waitForTimeout(5000)


})


test.only("multitab -context",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const pagepromise=context.waitForEvent('page')

    await page.getByText('OrangeHRM, Inc').click()

    const newpage=await pagepromise

    expect(newpage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
    // await newpage.getByPlaceholder('Enter your email address here').fill("HI")
    // await newpage.waitForTimeout(3000)
    //await browser.close();
    
})


test("multitab-promise",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const [multipage]=await Promise.all(
        [
        context.waitForEvent('page'),
        await page.getByText('OrangeHRM, Inc').click()
        ])
    //await multipage.waitForLoadState();

    //to find the number of pages opened
    const totalpage=multipage.context().pages()//3
    console.log(totalpage.length)//3
    
    //to get the url of the open pages 
    totalpage.forEach((url)=>{
        console.log(url.url())
    })

    //to access element in the web page
    
        let webpage;

        for(let i=0;i< await totalpage.length;i++)
            {

            const title=await totalpage[i].title()
        if(title =="Human Resources Management Software | OrangeHRM")
            {
            webpage=totalpage[i]//2tab
         }
        }
        await webpage.getByPlaceholder('Enter your email address here').fill("HI")
        await webpage.waitForTimeout(5000)
    
     })

