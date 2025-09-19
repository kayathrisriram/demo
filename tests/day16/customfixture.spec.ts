//types of fixture
//1. test fixture-requested by test and gets rerun per test

import {test} from '../../Fixtures/customfixture'

// test("test1fixture",async({fixtureone})=>{
//     console.log(`use statement execution : ${fixtureone}`)
    
// })


// test("test2fixture",async({fixtureone})=>{
//     console.log(`use statement execution : ${fixtureone}`)

// })




//2.scope /worker fixture-runs only once per worker :worker -2

test("test1 worker fixture",async({fixtureone,workerfixture})=>{
    console.log(`use statement execution : ${fixtureone}`)
    console.log(`use statement execution : ${workerfixture}`)

})
test("test2 testfixture",async({fixtureone})=>{
       console.log(`use statement execution : ${fixtureone}`)
    
     })
   


//can be used with POM and over before/after hooks



