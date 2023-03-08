import { Selector,t } from 'testcafe';
import xPathSelector from './xPathSelector';


class productListPage {
    

    //readonly url="https://www.saucedemo.com";
    //readonly nameInput;
    constructor () {
        this.productPage = Selector('.title');
        this.itemLabel;
        this.itemPrice;
        this.addToCartBtn;
        this.shopCartContainer= Selector('#shopping_cart_container');
        //this.cartList= Selector('.cart_list');
        this.cartAddedItem;
        this.letters = new Set();
        this.checkoutBtn= Selector('#checkout');

        this.fName= Selector('#first-name');
        this.lName= Selector('#last-name');
        this.zipCode= Selector('#postal-code');

        this.checkoutContinueBtn= Selector('#continue');
        this.checkoutFinishBtn= Selector('#finish');
        this.completeHeader= Selector('.complete-header');
    }

        async isProductPageDisplay(){
            await t
            .expect(this.productPage.innerText).eql("Products");           
             }

             async isAproductDisplay(itemName){
                this.itemLabel = xPathSelector("//*[text()='"+ itemName +"']");
                await t
                .expect(this.itemLabel.innerText).eql(itemName);           
                 }

                 async isItemPriceCorrect(itemName, itemPriceTxt){
                    this.itemPrice = xPathSelector("//*[text()='"+ itemName +"' ]//following:: div[3]");
                    await t
                    .expect(this.itemPrice.innerText).eql(itemPriceTxt);           
                     }

                     async addToCart(itemName){
                        this.addToCartBtn = xPathSelector("//*[text()='"+ itemName +"' ]//following:: button[1]");
                        await t
                        .click(this.addToCartBtn)  
                        this.letters.add(itemName);
                         }

                         async goToShoppingCart(){
                            await t
                            .click(this.shopCartContainer)          
                             }
    
                         async areSelectItmsAddToCart(){
                            for (const itemLabel of this.letters.values()) {
                                this.cartAddedItem=xPathSelector("//*[@class='inventory_item_name' and text()='"+itemLabel+"']")
                                await t
                            .expect(this.cartAddedItem.innerText).eql(itemLabel);           
                             }
                              }

                              async clickChkout(){
                                await t
                                .click(this.checkoutBtn)          
                                 }

                                 async chkoutUrInfoFormSubmit(fNameTxt,lNameTxt,zipCodeTxt){
                                    await t
                                    .typeText(this.fName, fNameTxt)
                                    .typeText(this.lName, lNameTxt)
                                    .typeText(this.zipCode, zipCodeTxt)
                                    .click(this.checkoutContinueBtn);

                                    await t
                                    .click(this.checkoutFinishBtn);
                                    }

                                    async isCheckoutOrderSuccess(){
                                        await t
                                        .expect(this.completeHeader.innerText).eql("Thank you for your order!");
                                        }

                            

        
}

export default new productListPage();
