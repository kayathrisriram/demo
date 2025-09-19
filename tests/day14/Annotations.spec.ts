import {expect, test} from '@playwright/test'


test("skip annotations",async({page,browserName})=>{
    if(browserName=='chromium'){
        test.skip()
    }
 await page.goto('https://testautomationpractice.blogspot.com/')
  await page.locator('#male').check()
  await expect(page.locator('#male')).toBeChecked();
  //await expect(await page.locator('#male').isChecked()).toBeTruthy();//true
  await page.waitForTimeout(5000)
  await expect( page.locator('#female')).not.toBeChecked();
})

//fixme -similar to skip 
test("fixme",async({page,browserName})=>{
    test.fixme() 
 await page.goto('https://testautomationpractice.blogspot.com/')
  await page.locator('#male').check()
  await expect(page.locator('#male')).toBeChecked();
  //await expect(await page.locator('#male').isChecked()).toBeTruthy();//true
  await page.waitForTimeout(5000)
  await expect( page.locator('#female')).not.toBeChecked();

})

test.only("fail",async({page,browserName})=>{
    test.fail() // expect-fail / testcase -pass /result -fail 
    //expect -fail /testcase-fail /result -pass
 await page.goto('https://testautomationpractice.blogspot.com/')
 
await page.locator('#male')
  await expect(page.locator('#male')).toBeChecked();

})

test("slow",async({page,browserName})=>{
    //test.slow()//triples the timeout 3*10000=30000
        test.setTimeout(3000)
 await page.goto('https://testautomationpractice.blogspot.com/')
  await page.locator('#male').check()
  //await page.locator('#male')
  await expect(page.locator('#male')).toBeChecked();
  
})

