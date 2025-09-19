import {test,chromium, Page, Browser, BrowserContext} from '@playwright/test'
let browser:Browser;
let context:BrowserContext;
let page:Page;

test.beforeAll("Before All test",async()=>{
    browser= await chromium.launch({headless:false});
    context=await browser.newContext();
    page=await context.newPage();
    console.log("*****Before All Test****")
})
test.beforeEach("Before each test",async()=>{
    console.log("*****Before Each Test****")
    // await page.goto('https://www.saucedemo.com/v1/')
    // await page.getByPlaceholder('Username').fill('standard_user');
    // await page.getByPlaceholder('Password').fill('secret_sauce');
    // await page.getByRole('button').click();
})
test.describe("describe",async()=>{
    test.beforeAll("beforeeach inside describe",async()=>{
        console.log("*****Before all inside descibe****")
    })
    test.beforeEach("beforeeach inside describe",async()=>{
        console.log("*****Before each inside describe****")
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button',{name:/Login/}).click()
    })
    test("test 1 inside describe block",async()=>{
        console.log("test1 inside describe")
        await page.getByRole('listitem').filter({hasText:'PIM'}).click();
    })
    test("test 2 inside describe block",async()=>{
        console.log("test2 inside describe")
        await page.getByRole('listitem').filter({hasText:'Leave'}).click();
    })
   
test.afterEach("After each inside describe all",async()=>{
    console.log("*****After each inside describe****")

    await page.locator('//span[@class="oxd-userdropdown-tab"]').click();
    await page.locator('//a[text()="Logout"]').click()
})
test.afterAll("afterall inside describe",async()=>{
    console.log("***** AfterAll inside describe****")
})
})//end of describe 

test.afterEach("After each test",async()=>{
    console.log("*****After each test****")
//     await page.waitForSelector(".bm-burger-button")
//    await page.locator(".bm-burger-button").click()
//     await page.click("#logout_sidebar_link")
})
test.afterAll("after all test ",async()=>{
    console.log("*****After All Test****")
 browser.close()
})