import {test } from '@playwright/test'



test("file upload",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

   await page.setInputFiles("input[type='file']","./tests/filesToUpload/testFile.txt")
   
   await page.waitForTimeout(10000)

})

// to upload multiple files
test("multi file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   await page.setInputFiles("#multipleFilesInput",["./tests/filesToUpload/testFile.txt","./tests/filesToUpload/testDoc.txt"])
   //await page.waitForTimeout(10000)
   // to remove file
 await page.setInputFiles("#multipleFilesInput",[])
 await page.waitForTimeout(10000)
})

//file upload using event handlers-setFiles


test.skip("multi file upload-event handler",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

        const uploadFile= page.waitForEvent('filechooser')
        await page.locator("#multipleFilesInput").click()
        const upload=await uploadFile


    upload.setFiles(["./tests/filesToUpload/testFile.txt","./tests/filesToUpload/testDoc.txt"])
   await page.waitForTimeout(10000)

})
