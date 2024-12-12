import { $, browser } from '@wdio/globals'
import Page from './page';

/**
 * Sub page for base function on the app pages excluding the login page
 */
export class BaseTabsPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get menuButton () {
        return $('ion-menu-button');
    }

    public get homeButton () {
        return $('ion-tab-button[ng-reflect-router-link="homescreen"]');
    }

    public get dataButton () {
        return $('ion-tab-button[ng-reflect-router-link="data"]');
    }

    public get exerciseButton () {
        return $('ion-tab-button[ng-reflect-router-link="exercise"]');
    }

    // sidemenu items
    public get sideMenuInfo () {
        return $('ion-item[ng-reflect-router-link="tabs/menu/info"]');
    }

    public get sideMenuLogout () {
        return $('ion-item.logout-item');
    }


    // click methods
    public async openInfoPage () {
       await this.menuButton.click();
       await this.sideMenuInfo.click();
    }

    public async logout () {
        await this.menuButton.click();
        await this.sideMenuLogout.click();
     }

    public override open (path: string) {
        return super.open(`tabs/${path}`);
    }
}

export default new BaseTabsPage();
