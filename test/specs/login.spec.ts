import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import { ROUTES } from 'test/helper/definition'


describe('Login screen', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('bljo', 'test');
        await expect(await browser.getUrl()).toBe(ROUTES.HOMESCREEN);
    })
})

