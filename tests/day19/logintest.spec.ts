import {test} from '@playwright/test'

test("automationexercise",async({page})=>{
    //to launch the app
    await page.goto("https://automationexercise.com/")
    //login
    await page.getByRole('link',{name:' Signup / Login'}).click()
    await page.locator('input[data-qa="login-email"]').fill("kayathri1311@gmail.com")
    await page.getByPlaceholder('password').fill("playwright")
    await page.getByRole('button',{name:'Login'}).click()
    //product selection
    await page.locator('a[data-product-id="1"]').first().click();
    await page.getByRole('button',{name:'Continue Shopping'}).click();
    await page.locator('a[data-product-id="2"]').first().click();
    await page.getByRole('link',{name:"View Cart"}).click()
    //checkout
    await page.getByText('Proceed To Checkout').click({timeout:30000})
    await page.getByRole('link',{name:"Place Order"}).click()
    await page.locator('input[name="name_on_card"]').fill('test')
    await page.locator('input[name="card_number"]').fill('test')
    await page.locator('input[name="cvc"]').fill('12345678901234')
    await page.getByPlaceholder('MM').fill('12')
    await page.getByPlaceholder('YYYY').fill("2025")
    await page.locator('#submit').click()
    //verify the order placed
    const msg=await page.locator('h2[data-qa="order-placed"]  ~p').textContent()
    console.log(msg)
})