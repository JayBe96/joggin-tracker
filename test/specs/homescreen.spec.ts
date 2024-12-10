
import { simulateLogin } from 'test/helpers/auth';
import { browser } from '@wdio/globals';
import homescreen from 'test/pageobjects/homescreen';

describe('Homescreen', () => {
    beforeEach(async () => {
        // await simulateLogin();
        await browser.pause(10000);
        await browser.execute('window.localStorage.setItem("test", "123")');
        await browser.pause(2000);
        await homescreen.open();
        await browser.pause(10000);
    });

    it('should navigate to homescreen', async () => {
        await expect(await browser.getUrl()).toBe('http://localhost:8100/tabs/homescreen');
    });
});
