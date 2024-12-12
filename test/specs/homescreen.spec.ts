import { browser } from '@wdio/globals';
import { ROUTES } from 'test/helper/definition';
import baseTabs from 'test/pageobjects/base.tabs';
import homescreen from 'test/pageobjects/homescreen';


describe('Homescreen', () => {
    beforeEach(async () => {
        await homescreen.open();
        await browser.execute('window.localStorage.setItem("loggedIn", "true")');
        await browser.refresh();
        await expect(await browser.getUrl()).toBe(ROUTES.HOMESCREEN);
    });

    describe('TC-02 Navigation', () => {
        it('TC-02 Navigation to exercise page', async () => {
            await baseTabs.exerciseButton.click();
            await expect(await browser.getUrl()).toBe(ROUTES.EXERCISE);
        });

        it('TC-02 Navigation to data page', async () => {
            await baseTabs.dataButton.click();
            await expect(await browser.getUrl()).toBe(ROUTES.DATA);
        });

        it('TC-02 Navigation to menu info page', async () => {
            await baseTabs.openInfoPage();
            await expect(await browser.getUrl()).toBe(ROUTES.MENU_INFO);
        });

        it('TC-02 Logout', async () => {
            await baseTabs.logout();
            await expect(await browser.getUrl()).toBe(ROUTES.LOGIN);
        });
    });
});
