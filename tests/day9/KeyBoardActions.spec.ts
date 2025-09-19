import {test} from '@playwright/test'


test('keyboardactions',async({page})=>{

    await page.goto("https://gotranscript.com/text-compare")

    await page.fill("[name='text1']",'welcome to automation')

    await page.keyboard.press('Control+A')//combination -press() //selecting the entire text  ('Meta + A ')

    await page.keyboard.press('Control+C')//copy the text

    await page.keyboard.down('Tab') //single key 

    await page.keyboard.up('Tab')

    await page.keyboard.press('Control+V')//combination 

    await page.waitForTimeout(5000)
})