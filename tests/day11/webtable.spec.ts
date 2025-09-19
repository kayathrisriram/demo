import {expect, test} from '@playwright/test'

test("webtable",async({page})=>{

 await page.goto('https://testautomationpractice.blogspot.com/')

 const table =page.locator('#productTable')

 const column=table.locator('thead tr th')
 console.log(await column.count())//4

 const rows=table.locator('tbody tr')
 console.log(await rows.count())//5

//*****************to select particular product
// const smartwatch= rows.filter
// ({
//    has:page.locator('td'),
//    hasText:'Smartwatch'
// })
//  smartwatch.locator('input').check()

//  await page.waitForTimeout(5000)

 //****************to select multiple product 
//  await selectProduct(rows,page,'Laptop')
//  await selectProduct(rows,page,'Tablet')

//  async function selectProduct(rows,page,product)
//  {
//     const variable=rows.filter({has:page.locator('td'),hasText:product})
//  await variable.locator('input').check()
//  }
//  await page.waitForTimeout(5000)
// })

//*************to read date from table 
// for(let i=0;i< await rows.count();i++)//i<5
//    {
//      const row=rows.nth(i);//row[1]
//      const tds=row.locator('td')
//      for(let j=0;j< await tds.count()-1;j++)
//      {
//       console.log(await tds.nth(j).textContent())//row[0][2]//proce
//      }
//    }
// })

//**************pagination
const pages=await page.locator('.pagination li a')
console.log(pages.count())//4

for(let p=0;p<await pages.count();p++)
{
   if(p>0)
      {
   await pages.nth(p).click()//p[2]
      }
   for(let i=0;i< await rows.count();i++)
         {
           const row=rows.nth(i);
           const tds=row.locator('td')
           for(let j=0;j< await tds.count();j++)
           {
            console.log(await tds.nth(j).textContent())
           }
         }
}
await page.waitForTimeout(5000)
})

