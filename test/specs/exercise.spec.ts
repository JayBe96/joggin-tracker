import { browser } from '@wdio/globals';
import { loadTestDatabase, checkNthRun, checkNthMeditation } from 'test/helper/databank';
import { ROUTES } from 'test/helper/definition';
import baseTabs from 'test/pageobjects/base.tabs';
import exercise from 'test/pageobjects/exercise';
import excercise from 'test/pageobjects/exercise';



describe('Exercise Page', () => {
    beforeEach(async () => {
        await excercise.open();
        await browser.execute('window.localStorage.setItem("loggedIn", "true")');
        await loadTestDatabase();
        await browser.refresh();
        await excercise.open();
        await expect(await browser.getUrl()).toBe(ROUTES.EXERCISE);
    });
    
    afterAll(async () => {
        await loadTestDatabase();
    });

    xit('TC-02 Navigation to homescreen', async () => {
        await baseTabs.homeButton.click();
        await expect(await browser.getUrl()).toBe(ROUTES.HOMESCREEN);
    });

    xit('TC-03 (Toast Appers) Enter Test run', async () => {
        await excercise.enterRunName('Test Run');
        await excercise.enterRunDuration(10);
        await excercise.enterDistance(5);
        await excercise.rateRun('good');
        await exercise.saveRunButton.click();
        await expect(await exercise.isInfoToast()).toBe(true);
        await expect(await exercise.isSuccessToast()).toBe(true);
    });

    xit('TC-04 (Toast Appers) Enter a Test Meditation', async () => {
        await exercise.selectMeditationSegment();
        await exercise.enterMeditationName('Test Meditation');
        await exercise.enterMeditationDuration(12);
        await exercise.selectMeditationType(3);
        await exercise.scrollToElement(exercise.saveMeditationButton);
        await exercise.rateMeditation('good');
        await exercise.saveMeditationButton.click();
        await expect(await exercise.isInfoToast()).toBe(true);
        await expect(await exercise.isSuccessToast()).toBe(true);
    });

    it('TC-03 (Database) Enter Test run database', async () => {
        await excercise.enterRunName('Test Run');
        await excercise.enterRunDuration(10);
        await excercise.enterDistance(5);
        await excercise.rateRun('bad');
        await exercise.saveRunButton.click();
        await exercise.isSuccessToast();
        await expect(checkNthRun(5, 'Test Run', 10, 5, 'bad')).toBe(true);
    });

    it('TC-04 (Database) Enter a Test Meditation', async () => {
        await exercise.selectMeditationSegment();
        await exercise.enterMeditationName('Test Meditation');
        await exercise.enterMeditationDuration(12);
        await exercise.selectMeditationType(3);
        await exercise.scrollToElement(exercise.saveMeditationButton);
        await exercise.rateMeditation('good');
        await exercise.saveMeditationButton.click();
        await exercise.isSuccessToast();
        await expect(checkNthMeditation(4, 'Test Meditation', 12, 'Transcendental meditation', 'good')).toBe(true);
    });
});