import { browser } from '@wdio/globals';
import { ROUTES } from 'test/helper/definition';
import baseTabs from 'test/pageobjects/base.tabs';
import exercise from 'test/pageobjects/exercise';
import excercise from 'test/pageobjects/exercise';



describe('Exercise Page', () => {
    beforeEach(async () => {
        await excercise.open();
        await browser.execute('window.localStorage.setItem("loggedIn", "true")');
        await browser.refresh();
        await excercise.open();
        await expect(await browser.getUrl()).toBe(ROUTES.EXERCISE);
    });

    xit('TC-02 Navigation to homescreen', async () => {
        await baseTabs.homeButton.click();
        await expect(await browser.getUrl()).toBe(ROUTES.HOMESCREEN);
    });

    it('TC-03 Enter Test run', async () => {
        await excercise.enterRunName('Test Run');
        await excercise.enterDuration(10);
        await excercise.enterDistance(5);
        await excercise.rateRun(1);
        await exercise.saveRunButton.click();
        await expect(await exercise.isInfoToast()).toBe(true);
        await expect(await exercise.isSuccessToast()).toBe(true);
    });

});