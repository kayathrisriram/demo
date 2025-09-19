import {expect, test} from '@playwright/test'

test("checkbox",async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/')
 //single checkbox
  await page.check('[value="sunday"]')
  expect(page.locator('[value="sunday"]')).toBeChecked();
  await page.waitForTimeout(5000)
  await page.uncheck('[value="sunday"]')
  expect(page.locator('[value="monday"]')).not.toBeChecked();
  await page.waitForTimeout(5000)
})



test("multiple checkbox",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

const checkbox=[
    '[value="sunday"]',
    "//input[@id='monday' and @type='checkbox']",
]
//for..in - 
for (const local of checkbox){
    await page.locator(local).check();
    //console.log()
}
await page.waitForTimeout(5000)
//to uncheck multiple checkbox

for (const locat of checkbox){
    if( await page.locator(locat).isChecked())
    {
        await page.locator(locat).uncheck();
    }
}
await page.waitForTimeout(5000)
})