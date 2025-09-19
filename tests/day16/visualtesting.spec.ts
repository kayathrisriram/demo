import {expect,test} from '@playwright/test'


test('visual testing',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.waitForTimeout(5000)
await page.getByPlaceholder('Username').fill('Admin')
//await page.screenshot({ path:'screenshot.png', fullPage: true });

expect(await page.screenshot({fullPage:true})).toMatchSnapshot('orangehrm.png')
})