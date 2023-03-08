	
import LoginPage from "../Pages/loginpage";
import productListPage from "../Pages/productListPage";
import { faker } from '@faker-js/faker';

const pageURL ="https://www.saucedemo.com";

fixture `Login page`
    .page (pageURL);

test("Can Checkout a order", async t => {
    let fName=faker.name.firstName();
    let lName=faker.name.lastName();
    let zipCode=faker.address.zipCode();
await LoginPage.login("performance_glitch_user","secret_sauce");
await productListPage.isProductPageDisplay();
await productListPage.isAproductDisplay("Sauce Labs Backpack");
//check item price
await productListPage.isItemPriceCorrect("Sauce Labs Backpack","$29.99")
//addto cart 1st item
await productListPage.addToCart("Sauce Labs Backpack");
//addto cart 2nd item
await productListPage.addToCart("Sauce Labs Bike Light");
//go to shooping cart
await productListPage.goToShoppingCart();
// check added item in shopping cart
await productListPage.areSelectItmsAddToCart();
//Checkout items
await productListPage.clickChkout();
await productListPage.chkoutUrInfoFormSubmit(faker.name.firstName(),faker.name.lastName(),faker.address.zipCode());
//Check success page
await productListPage.isCheckoutOrderSuccess();
 });