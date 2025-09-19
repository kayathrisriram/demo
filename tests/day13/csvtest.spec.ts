//CSV-Comma separated value ,->npm i csv-parse ->convert your text input into array of objects

import {test} from '@playwright/test'
import fs from "fs";
import {parse} from "csv-parse/sync"

//to read data :
const data=parse(fs.readFileSync("TestData/testdata.csv"),{
    columns:true,
    skip_empty_lines:true,
    //delimiter:"?"//optional
})
data.forEach((dt:any) => {
    
test(`csv data with ${dt.Id}`,async({page})=>{
   //console.log(data)
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.waitForLoadState()
    await page.getByPlaceholder("First Name").fill(dt.Firstname)
    //await page.waitForTimeout(5000)
    await page.getByPlaceholder("Last Name").fill(dt.Lastname)
 
})
})