import { LoginFunctionality } from "../../Pages/loginpage";
import {test} from '@playwright/test'
import { ProductSelection } from "../../Pages/productselection";
import { checkout } from "../../Pages/checkoutpage";


test("login",async({page})=>{
    //to login
    const loginpage=new LoginFunctionality(page)
    await loginpage.launchApp()
    await loginpage.login()
    // to select product
    const prodsel=new ProductSelection(page)
    await prodsel.SelectProduct()
    //checkout
    const ck=new checkout(page)
    await ck.checkout()
})






















test("login",async({page})=>{
    //to login
    const loginpage=new LoginFunctionality(page)
    await loginpage.launchApp()
    await loginpage.login()
    // to select product
    const prodsel=new ProductSelection(page)
    await prodsel.SelectProduct()
    //checkout
    const ck=new checkout(page)
    await ck.checkout()
})
test("login",async({page})=>{
    //to login
    const loginpage=new LoginFunctionality(page)
    await loginpage.launchApp()
    await loginpage.login()
    // to select product
    const prodsel=new ProductSelection(page)
    await prodsel.SelectProduct()
    //checkout
    const ck=new checkout(page)
    await ck.checkout()
})
test("login",async({page})=>{
    //to login
    const loginpage=new LoginFunctionality(page)
    await loginpage.launchApp()
    await loginpage.login()
    // to select product
    const prodsel=new ProductSelection(page)
    await prodsel.SelectProduct()
    //checkout
    const ck=new checkout(page)
    await ck.checkout()
})










