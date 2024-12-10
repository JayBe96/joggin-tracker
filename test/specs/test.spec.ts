import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import baseTabs from 'test/pageobjects/base.tabs'


describe('Login screen', () => {
    it('should login with valid credentials', async () => {

        await LoginPage.open();
        await LoginPage.login('bljo', 'test');
        await baseTabs.openInfoPage(); 
        await expect(await browser.getUrl()).toBe('http://localhost:8100/tabs/homescreen');
    })
})

