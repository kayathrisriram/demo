import {test} from '@playwright/test'

test("static dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({label:'India'});//label with visible text

    await page.locator("#country").selectOption('India');//visible text 

    await page.locator("#country").selectOption('india'); //by default -value attr
    await page.locator("#country").selectOption({value:'india'}); 

    await page.locator("#country").selectOption({index:9})//indexing starts from 0 
    
    await page.selectOption("#country","India")
    await page.waitForTimeout(5000)
})

test.only("multi dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.selectOption("#colors",["Blue","Red"])
    await page.waitForTimeout(5000)
})