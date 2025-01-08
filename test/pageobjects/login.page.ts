import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername() {
        return $('ion-input[name="username"]');
    }

    public get inputPassword() {
        return $('ion-input[name="password"]');
    }

    public get btnSubmit() {
        return $('ion-button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.$('input').setValue(username);
        await this.inputPassword.$('input').setValue(password);

        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public override open () {
        return super.open('login');
    }
}

export default new LoginPage();
