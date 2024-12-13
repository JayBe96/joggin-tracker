import { BaseTabsPage } from './base.tabs';
import { $, browser } from '@wdio/globals'

class ExercisesPage extends BaseTabsPage {

    // Segments
    public get runSegmentButton () {
        return $('[data-testid="exercise-run-segment"]');
    }

    public get meditationSegmentButton () {
        return $('[data-testid="exercise-meditation-segment"]');
    }
    
    // Run Objects
    public get runNameInput () {
        return $('[data-testid="exercise-run-name"]');
    }

    public get runDurationInput () {
        return $('[data-testid="exercise-run-duration"]');
    }

    public get runDistanceInput () {
        return $('[data-testid="exercise-run-distance"]');
    }

    public get rateYourRunSelect () {
        return $('[data-testid="exercise-run-rating"]');
    }

    public get saveRunButton () {
        return $('[data-testid="exercise-save-run"]');
    }

    // Meditation Objects
    public get meditationNameInput () {
        return $('[data-testid="exercise-meditation-name"]');
    }

    public get meditationDurationInput () {
        return $('[data-testid="exercise-meditation-duration"]');
    }

    public get meditationTypeRadioGroup () {
        return $('[data-testid="exercise-meditation-type"]');
    }

    public get rateYourMeditationSelect () {
        return $('[data-testid="exercise-meditation-rating"]');
    }

    public get saveMeditationButton () {
        return $('[data-testid="exercise-save-meditation"]');
    }

    // Select correct segment

    public async selectRunSegment () {
        await this.runSegmentButton.click();
    }

    public async selectMeditationSegment () {
        await this.meditationSegmentButton.click();
    }

    // Run segment
    public async enterRunName (name: string) {
        await this.runNameInput.click();
        await this.runNameInput.$('input').setValue(name);
    }

    public async enterRunDuration (duration: number) {
        await this.runDurationInput.click();
        await this.runDurationInput.$('input').setValue(duration);
    }

    public async enterDistance (distance: number) {
        await this.runDistanceInput.click();
        await this.runDistanceInput.$('input').setValue(distance);
    }
    public async rateRun (rating: 'good' | 'normal' | 'bad') {
        const ratingMap = {
            'good': 1,
            'normal': 2,
            'bad': 3
        };
        const n = ratingMap[rating];
        await this.rateYourRunSelect.click();
        const alert = await $('ion-alert');
        const option = await alert.$(`.alert-radio-group button:nth-child(${n})`);
        await option.click();
        const okButton = await alert.$('.alert-button-group button:last-child');
        await okButton.click();
    }

    public async saveRun () {
        await this.saveRunButton.click();
    }
    
    // Meditation segment

    public async enterMeditationName (name: string) {
        await this.meditationNameInput.click();
        await this.meditationNameInput.$('input').setValue(name);
    }

    public async enterMeditationDuration (duration: number) {
        await this.meditationDurationInput.click();
        await this.meditationDurationInput.$('input').setValue(duration);
    }

    public async selectMeditationType (type: number) {
        const options = await this.meditationTypeRadioGroup.$$('ion-radio');
        await options[type-1].click();
    }

    public async rateMeditation (rating: 'good' | 'normal' | 'bad') {
        const ratingMap = {
            'good': 1,
            'normal': 2,
            'bad': 3
        };
        const n = ratingMap[rating];
        await this.rateYourMeditationSelect.click();
        const alert = await $('ion-alert');
        const option = await alert.$(`.alert-radio-group button:nth-child(${n})`);
        await option.click();
        const okButton = await alert.$('.alert-button-group button:last-child');
        await okButton.click();
    }

    public async saveMeditaion () {
        await this.saveMeditationButton.click();
    }

    // Method to scroll to an element
    public async scrollToElement(element: WebdriverIO.Element) {
        await element.scrollIntoView();
    }

    // open
    public override open () {
        return super.open('exercise');
    }
}

export default new ExercisesPage();