import {test} from '@playwright/test'

test("date picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.fill("#datepicker",'04/25/2025')
    // await page.waitForTimeout(10000)

   await page.fill("#txtDate",'04/29/2025')//daypicker2 
    //await page.waitForTimeout(5000)
})


test("calender",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.click("#txtDate")
    const prev=page.locator("//span[text()='Prev']")
    const next=page.locator("//span[text()='Next']")
    // const currentMonth=page.locator('(//option[@selected="selected"])[1]')
    // const currentYear=page.locator('(//option[@selected="selected"])[2]')
 let selectMonth="Nov"
 let SelectYear="2025"
    await page.selectOption('.ui-datepicker-year',`${SelectYear}`)//2025
    await page.selectOption('.ui-datepicker-month',`${selectMonth}`)//nov
    await page.locator("tr>td>a:text-is('30')").click()
    await page.waitForTimeout(10000)
})

//template literals -${} , use back ticks

//a=5
//console.log("a value: " + a)
//console.log(` a value : ${a}`)

