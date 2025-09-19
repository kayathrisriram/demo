import {test} from '@playwright/test'

test.describe.serial("serial execution",()=>{

test("date picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.evaluate(()=>{
      window.scrollBy(0,100)
    })
})
//approach 2
test("scroll into view",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
const ele=page.locator('#country')
   ele.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000)
})

//approach 3
test("boundingbox",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
//bounding box
    let val=page.locator('#country')
    const box=await val.boundingBox();
    if(box){
    console.log(box.x);
    console.log(box.y);
    await page.mouse.wheel(0,box.y);
    }
    await page.waitForTimeout(5000)

})
})