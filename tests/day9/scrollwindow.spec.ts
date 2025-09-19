import {test} from '@playwright/test'

test("mouseactions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //approach1
    // await page.evaluate(()=>{
    //   window.scrollBy(0,80)//vertically
    //   window.scrollBy(2,0)//
    // })


    //approach 2
    //  const ele=page.locator('#country')
    //  ele.scrollIntoViewIfNeeded();
    //  await page.waitForTimeout(5000)
  
//bounding box - approach 3
    let val=page.locator('#country')
    const box=await val.boundingBox();
    if(box){
    console.log(box.x);//60
    console.log(box.y);//600
    await page.mouse.wheel(0,box.y);
    }
    await page.waitForTimeout(10000)

})