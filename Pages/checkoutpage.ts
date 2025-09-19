import { Locator, Page, expect } from '@playwright/test'
import dt from "../TestData/cko.json"

export class checkout {
    page:Page
    private proceedtocheckout:Locator
    private placeorder:Locator
    private cardname:Locator
    private cardNumber:Locator
    private cardMM:Locator
    private cardYYYY:Locator
    private cardCVC:Locator
    private submitButton:Locator
    private verifytext:Locator

    constructor(page:Page)
    {
        this.page=page;
        this.proceedtocheckout=page.getByText('Proceed To Checkout')
        this.placeorder=page.getByRole('link',{name:"Place Order"})
        this.cardname=page.locator('input[name="name_on_card"]')
        this.cardNumber=page.locator('input[name="card_number"]')
        this.cardCVC=page.locator('input[name="cvc"]')
        this.cardMM=page.getByPlaceholder('MM')
        this.cardYYYY=page.getByPlaceholder('YYYY')
        this.submitButton=page.locator('#submit')
        this.verifytext=page.locator('h2[data-qa="order-placed"]  ~p')
    }
    
    async checkout()
    {
        await this.proceedtocheckout.click()
        await this.placeorder.click({timeout:30000})
        await this.cardname.fill(dt.cardholdername)
        await this.cardNumber.fill(dt.cardnumber)
        await this.cardMM.fill(dt.cardMM)
        await this.cardYYYY.fill(dt.cardyear)
        await this.cardCVC.fill(dt.cardcvv)
        await this.submitButton.click()
        //verify the order placed
        const msg=await this.verifytext.textContent()
        console.log(msg)
    }
}