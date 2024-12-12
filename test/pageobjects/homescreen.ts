import { BaseTabsPage } from './base.tabs';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomescreenPage extends BaseTabsPage {

    public override open () {
        return super.open('homescreen');
    }

}

export default new HomescreenPage();