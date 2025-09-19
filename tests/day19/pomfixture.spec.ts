//fixture implementation with POM 
import {test} from '../../Fixtures/pomfixture'


test("login",async({loginpage,checkoutpage,productselection})=>{
    //to login
    await loginpage.launchApp()
    await loginpage.login()
    // to select product
    await productselection.SelectProduct()
    //checkout
    await checkoutpage.checkout()
})

