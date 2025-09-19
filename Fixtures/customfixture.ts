//use test.extend() to create custom fixture
import {test as basetest} from '@playwright/test'

type fixture1={
    fixtureone:string
}

type worker={
    workerfixture:any
}

export const test=basetest.extend<fixture1,worker>({
    fixtureone:async({},use)=>
        {
        //before use 
        const fixture1="Playwright learning"
        console.log("before executing use stmt -fixture1")
        //use - will run the test from where fixture is called
        await use(fixture1)
        //after use 
        console.log("after executing use fixture1")
    }
    ,
    workerfixture:[async({},use)=>{
        //before
        const workerfixture="worker fixture"
        console.log("before executing workerfixture")
        //use - will run the test from where fixture is called
        await use(workerfixture)
        //after
        console.log("after executing worker fixture")},{scope:"worker"}]
    })
