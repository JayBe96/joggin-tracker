import { browser } from '@wdio/globals';
import homescreen from 'test/pageobjects/homescreen';


xdescribe('Homescreen', () => {
    beforeEach(async () => {
        await homescreen.open();
        await browser.execute('window.localStorage.setItem("test", "123")');
        await browser.pause(1000);
        await browser.refresh();
        await browser.pause(1000);
    });

    it('should navigate to homescreen', async () => {
        await expect(await browser.getUrl()).toBe('http://localhost:4200/tabs/homescreen');
    });
});
