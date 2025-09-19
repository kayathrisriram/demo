import {expect, test} from '@playwright/test'

test("Simple Alert",async({page})=>{

 await page.goto('https://testautomationpractice.blogspot.com/')
//handling popup 

 page.on('dialog',async (dialog)=>{
 console.log(dialog.type()) //simple alert 
 console.log(dialog.message())//I am an alert box!
 await dialog.accept();
 })

 await page.click("button:has-text('Simple Alert')")


})





test("confirmation Alert",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async (dialog)=>{
    console.log(dialog.type())
    console.log(dialog.message())
    expect(dialog.message()).toContain('Press a button!')
    await dialog.dismiss();
    //await dialog.accept();
    })
    await page.click("button:has-text('Confirmation Alert')")
    await page.waitForTimeout(10000)
    //await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');  
   })
   test("prompt Alert",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async (dialog)=>{
    console.log(dialog.type())
    console.log(dialog.message())
    console.log(dialog.defaultValue())//to get the default value available in the input box of alert
    await dialog.accept("kayathri");
    //await dialog.dismiss();
    })
    await page.click("button:has-text('Prompt Alert')")
    
await page.waitForTimeout(10000)
        
   })
