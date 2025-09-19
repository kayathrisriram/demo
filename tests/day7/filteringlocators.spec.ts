
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
 
    //filter by text
    await page.getByRole('listitem').filter({hasText:'Leave'}).click();
    
    //filtering with nth()
    await page.getByRole('listitem').nth(2).click()

    await page.waitForTimeout(10000)

    // filter by child/descendant
    await page.getByRole('listitem').filter({has: page.getByRole('link',{name:'Leave'})}).click();

})


//assignment 
test("sauce lab",async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/')
    await page.getByPlaceholder('Username').fill('standard_user');
    
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
    
    await page.pause();
    await page.locator('//*[@class="inventory_item"]')
    .filter({hasText:'Sauce Labs Backpack'})
    .getByRole("button")
    .click();
    
})