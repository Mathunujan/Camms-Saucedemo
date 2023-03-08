import { Selector,t } from 'testcafe';

class LoginPage {

    //readonly url="https://www.saucedemo.com";
    //readonly nameInput;
    constructor () {
        this.nameInput = Selector('#user-name');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login-button');
    }


    async login(name,password){
        await t
        .typeText(this.nameInput, name)
        .typeText(this.password, password)
        .click(this.loginBtn);
        }
}

export default new LoginPage();
