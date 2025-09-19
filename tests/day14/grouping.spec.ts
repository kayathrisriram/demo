import {test} from '@playwright/test'
//tagging using test title

test("Login test@UI",async({page})=>{
   
    await page.goto('https://www.saucedemo.com/v1/')
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
})
//tagging as additional  object 
test("logout",
    {tag:"@Smoke"},
    async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/')
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
    await page.waitForSelector(".bm-burger-button")
    await page.locator(".bm-burger-button").click()
    await page.click("#logout_sidebar_link")
})
//tag for describe 
test.describe("orangehrm describe tagging @Sanity",async()=>{
    //multiple tag 
test("Leave functionality",
    {tag :
        [ "@Smoke","@API"]
        },
    async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button',{name:/Login/}).click()
    await page.getByRole('listitem').filter({hasText:'Leave'}).click();
})
test("PIM functionality@API",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button',{name:/Login/}).click()
    await page.getByRole('listitem').filter({hasText:'PIM'}).click();
})
})//end of describe

//Run test with specific tags
//npx playwright test --grep=@tag1
//npx playwright test --grep-invert=@tag
//eitheror - npx playwright test --grep="@tag1|@tag2"
//logical AND -npx playwright test --grep "(?=.*@fast)(?=.*@slow)"
