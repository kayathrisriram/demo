//Read data from a JSON 

import {test,expect} from '@playwright/test'
import data from '../../TestData/testdata.json'
import data1 from '../../TestData/recruitmentdata.json'

import fs from 'fs'
import path from 'path'

//  test.skip("json test 1",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/");
//     await page.getByPlaceholder("Username").fill(data.username);//("Admin")
//     await page.getByPlaceholder("Password").fill(data.password);
//     await page.getByRole('button',{name:'Login'}).click()
//    await page.getByRole('link',{name:'Recruitment'}).click();
//    await page.getByRole('button',{name:' Add '}).click();
//    await expect(page.locator('#app')).toContainText('Add Candidate');
//    await page.getByPlaceholder('First Name').fill(data.fname)
//    await page.getByPlaceholder('Last Name').fill(data.lname)
//    await page.getByPlaceholder('Type Here').first().fill(data.email)
//    await page.getByRole('button',{name:'Save'}).click()
//    await page.waitForTimeout(10000)
//    await expect(page.getByText('Application Stage')).toBeVisible();
// })

//Parameterize tests with different set of data
//const data1=JSON.parse(fs.readFileSync(path.join(__dirname,"../../TestData/recruitmentdata.json"),'utf-8'))
for(const dt of data1){
test(`json test 2 ${dt.Id}`,async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.waitForLoadState()
    await page.getByPlaceholder("Username").fill(data.username);
    await page.getByPlaceholder("Password").fill(data.password);
    await page.getByRole('button',{name:/Login/}).click()
    await page.getByRole('link',{name:'Recruitment'}).click();
    await page.getByRole('button',{name:' Add '}).click();
    await expect(page.locator('#app')).toContainText('Add Candidate');
    await page.getByPlaceholder('First Name').fill(dt.fname)//recruitmentdata.json"
    await page.getByPlaceholder('Last Name').fill(dt.lname)
    await page.getByPlaceholder('Type Here').first().fill(dt.email)
    await page.getByRole('button',{name:'Save'}).click()
    await page.waitForTimeout(10000)
    await expect(page.getByText('Application Stage')).toBeVisible();
 })
}

 