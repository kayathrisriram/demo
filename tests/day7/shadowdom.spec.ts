import { test} from '@playwright/test'

test("Shadow Dom",async ({page}) =>{

await page.goto('https://books-pwakit.appspot.com/')
await page.locator('#input').fill('testing books')

})  


