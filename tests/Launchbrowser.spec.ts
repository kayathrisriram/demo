import {  test,chromium } from "@playwright/test"

test("first_script", async () => {

    const browser = await chromium.launch({ channel: 'chrome' });
    const con = await browser.newContext();//incognito mode 
    const page = await con.newPage();//tab

    await page.goto("https://www.gmail.com")
})