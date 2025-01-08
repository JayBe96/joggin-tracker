import { BaseTabsPage } from './base.tabs';
import { $, $$, browser } from '@wdio/globals';

export class DataPage extends BaseTabsPage {
    // runs
    async clickNthRun(n: number): Promise<void> {
        const runItem = await $(`[data-testid="data-run-item-${n}"]`);
        await runItem.click();
    }

    async deleteNthRun(n: number): Promise<void> {
        const deleteButton = await $(`[data-testid="data-run-item-${n}"] ion-button`);
        await deleteButton.click();
    }

    async checkNthRunDom(
        n: number,
        date: string,
        duration: number,
        distance: number,
        rating: string
    ): Promise<boolean> {
        const runLabel = await $(`[data-testid="data-run-item-${n}"] ion-label`);
        
        const runDate = await runLabel.$('h3').getText();
        const runDuration = await runLabel.$('p:nth-of-type(1)').getText();
        const runDistance = await runLabel.$('p:nth-of-type(2)').getText();
        const runRating = await runLabel.$('p:nth-of-type(3)').getText();

        // console.log(`\n Index: ${n}`);
        // console.log(`Run Date: ${runDate}`);
        // console.log(`Run Duration: ${runDuration}`);
        // console.log(`Run Distance: ${runDistance}`);
        // console.log(`Run Rating: ${runRating}`);

        return runDate === date &&
               runDuration === `Duration: ${duration} minutes` &&
               runDistance === `Distance: ${distance} km` &&
               runRating === `Rating: ${rating}`;
    }

    // meditations
    async clickNthMeditation(n: number): Promise<void> {
        const meditationItem = await $(`[data-testid="data-meditation-item-${n}"]`);
        await meditationItem.click();
    }

    async deleteNthMeditation(n: number): Promise<void> {
        const deleteButton = await $(`[data-testid="data-meditation-item-${n}"] ion-button`);
        await deleteButton.click();
    }

    async checkNthMeditationDom(n: number, name: string, duration: number, type: string, rating: string): Promise<boolean> {
        const meditationLabel = await $(`[data-testid="data-meditation-item-${n}"] ion-label`);
        
        const meditationName = await meditationLabel.$('h3').getText();
        const meditationDuration = await meditationLabel.$('p:nth-of-type(1)').getText();
        const meditationType = await meditationLabel.$('p:nth-of-type(2)').getText();
        const meditationRating = await meditationLabel.$('p:nth-of-type(3)').getText();

        return meditationName === name &&
               meditationDuration === `Duration: ${duration} minutes` &&
               meditationType === `Type: ${type}` &&
               meditationRating === `Rating: ${rating}`;
    }

    // open
    public override open () {
        return super.open('data');
    }

    /**
     * Scrolls to the nth run element in the list
     * @param runNumber The index of the run to scroll to
     */
    public async scrollToNthRun(runNumber: number) {
        const runElement = await $(`[data-testid="data-run-item-${runNumber}"]`);
        await runElement.scrollIntoView();
        await browser.pause(100); // Small pause for stable rendering
    }
}

export default new DataPage();
