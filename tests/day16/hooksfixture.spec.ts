//  import {test} from'@playwright/test'

// test.beforeEach("Before each test",async({page})=>{
//     await page.goto('https://www.saucedemo.com/v1/')
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     await page.getByRole('button').click();
// })

// test( "Test 1",async({page})=>{
//     await page.locator('//*[@class="inventory_item"]')
//     .filter({hasText:'Sauce Labs Backpack'})
//     .getByRole("button")
//     .click();
// })
// test("Test2",async({page})=>{
//     await page.locator(".bm-burger-button").isVisible()
// })

// test.afterEach("After each test",async({page})=>{
//     await page.waitForSelector(".bm-burger-button")
//    await page.locator(".bm-burger-button").click()
//     await page.click("#logout_sidebar_link")
// })

//implementing fixture over hooks
import {test} from '../../Fixtures/hooksfixture'

test( "Test 1",async({page,loginfixture})=>{
        await page.locator('//*[@class="inventory_item"]')
        .filter({hasText:'Sauce Labs Backpack'})
        .getByRole("button")
        .click();
    })
    test("Test4",async({page,loginfixture})=>{
        await page.locator(".bm-burger-button").isVisible()
    })