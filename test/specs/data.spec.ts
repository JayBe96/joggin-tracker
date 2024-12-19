import { browser } from '@wdio/globals';
import { loadTestDatabase, checkNthRun, checkNthMeditation } from 'test/helper/databank';
import { ROUTES } from 'test/helper/definition';
import baseTabs from 'test/pageobjects/base.tabs';
import data from 'test/pageobjects/data';



describe('Exercise Page', () => {
    beforeEach(async () => {
        await data.open();
        await browser.execute('window.localStorage.setItem("loggedIn", "true")');
        await loadTestDatabase();
        await browser.refresh();
        await data.open();
        await expect(await browser.getUrl()).toBe(ROUTES.DATA);
    });
    
    afterAll(async () => {
        await loadTestDatabase();
    });

    it('TC-02 Navigation to homescreen', async () => {
        await baseTabs.homeButton.click();
        await expect(await browser.getUrl()).toBe(ROUTES.HOMESCREEN);
    });

    it('TC-03 Read Data', async () => {
        console.log(await data.checkNthRunDom(1, '1. Nov. 2024', 14, 2, 'bad'));
        await expect(await data.checkNthRunDom(1, '1. Nov. 2024', 14, 2, 'bad')).toBeTruthy();
        console.log(await data.checkNthRunDom(2, '31. Okt. 2024', 22.5, 2.75, 'bad'));
        // await expect(await data.checkNthRunDom(2, '31. Okt. 2024', 22.5, 2.75, 'bad')).toBeTruthy();
        console.log(await data.checkNthRunDom(3, '28. Okt. 2024', 19.5, 2.5, 'normal'));
        // await expect(await data.checkNthRunDom(3, '28. Okt. 2024', 19.5, 2.5, 'normal')).toBeTruthy();
         console.log(await data.checkNthRunDom(4, '27. Okt 2024', 50, 6.5, 'good'));
        // await expect(await data.checkNthRunDom(4, '27. Okt 2024', 50, 6.5, 'good')).toBeTruthy();
         console.log(await data.checkNthRunDom(5, '24. Okt 2024', 17.5, 2.25, 'normal'));
        // await expect(await data.checkNthRunDom(5, '24. Okt 2024', 17.5, 2.25, 'normal')).toBeTruthy();
    });
});