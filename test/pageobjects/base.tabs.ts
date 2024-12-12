import { $ } from '@wdio/globals'
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

    public async openInfoPage () {
       await this.menuButton.click();
    }

    public override open (path: string) {
        return super.open(`tabs/${path}`);
    }
}

export default new BaseTabsPage();
