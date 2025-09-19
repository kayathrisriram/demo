import {test} from '@playwright/test'
import moment from 'moment'

test("calender",async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    await page.getByPlaceholder('Start date').click()
   await SelectDate(4,"April 2026")
  // await SelectDate(4,"May 2024")


  async function SelectDate(date,dateToSelect)
   {
        const current = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")
        //let dateToSelect = "April 2026"
        const thismonth = moment(dateToSelect, "MMMM YYYY").isBefore()//boolean true
        console.log(thismonth)//true
        while (await current.textContent() != dateToSelect) {
            if (thismonth) {
                await prev.click()
            } else {
               await next.click()
            }
       }
        await page.click(`//td[@class='day' and text()="${date}"]`)
        await page.waitForTimeout(5000)
   }
})