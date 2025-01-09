import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {
    public get inputUsername() {
        return $('ion-input[name="username"]');
    }

    public get inputPassword() {
        return $('ion-input[name="password"]');
    }

    public get btnSubmit() {
        return $('ion-button[type="submit"]');
    }

    public async login (username: string, password: string) {
        await this.inputUsername.$('input').setValue(username);
        await this.inputPassword.$('input').setValue(password);
        await this.btnSubmit.click();
    }

    public override open () {
        return super.open('login');
    }
}

export default new LoginPage();
