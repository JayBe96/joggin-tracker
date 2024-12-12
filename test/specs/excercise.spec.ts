import { browser } from '@wdio/globals';
import { ROUTES } from 'test/helper/definition';
import baseTabs from 'test/pageobjects/base.tabs';
import excercise from 'test/pageobjects/exercise';



describe('Exercise Page', () => {
    beforeEach(async () => {
        await excercise.open();
        await browser.execute('window.localStorage.setItem("loggedIn", "true")');
        await browser.refresh();
        await excercise.open();
        await expect(await browser.getUrl()).toBe(ROUTES.EXERCISE);
    });

    describe('Excersice Page', () => {
        it('TC-02 Navigation to homescreen', async () => {
            await baseTabs.homeButton.click();
            await expect(await browser.getUrl()).toBe(ROUTES.HOMESCREEN);
        });
    });
});