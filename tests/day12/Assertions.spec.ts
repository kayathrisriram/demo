import {test,expect} from '@playwright/test'

test("Basic assertions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")

    await  expect(page).toHaveTitle("Automation Testing Practice")

   await expect.soft(page.locator(`//h2[@class="title" and text()="Mouse Hover"]`)).not.toBeVisible()  

      const enabled=await page.locator('[value="sunday"]')
    await expect(enabled).toBeEnabled();

     await page.check('[value="sunday"]')
     expect(page.locator('[value="sunday"]')).toBeChecked({timeout:5000});

     expect(page.locator('.start')).toHaveAttribute('name','start')
     const expected=page.locator('//h2[@class="title" and text()="Mouse Hover"]')
     expect(expected).toHaveText("Mouse Hover")

     const text=page.locator("#HTML3>div>p")

     expect(text).toContainText("Move")

     await page.fill("#field1","HI")
     expect(page.locator('#field1')).toHaveValue("HI")


     const options=await page.locator("#colors option")
     expect(options).toHaveCount(7)
})

