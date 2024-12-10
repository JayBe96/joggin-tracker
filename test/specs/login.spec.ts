import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import baseTabs from 'test/pageobjects/base.tabs'


xdescribe('Login screen', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('bljo', 'test');
        await expect(await browser.getUrl()).toBe('http://localhost:8100/tabs/homescreen');
    })
})

