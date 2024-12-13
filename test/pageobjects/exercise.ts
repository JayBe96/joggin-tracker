import { BaseTabsPage } from './base.tabs';
import { $ } from '@wdio/globals'

class ExercisesPage extends BaseTabsPage {

    public get runSegmentButton () {
        return $('[data-testid="exercise-run-segment"]');
    }

    public get meditationSegmentButton () {
        return $('[data-testid="exercise-meditation-segment"]');
    }

    public get runNameInput () {
        return $('[data-testid="exercise-run-name"]');
    }

    public get durationInput () {
        return $('[data-testid="exercise-run-duration"]');
    }

    public get distanceInput () {
        return $('[data-testid="exercise-run-distance"]');
    }

    public get rateYourRunSelect () {
        return $('[data-testid="exercise-run-rating"]');
    }

    public get saveRunButton () {
        return $('[data-testid="exercise-save-run"]');
    }

    public async selectRunSegment () {
        await this.runSegmentButton.click();
    }

    public async selectMeditationSegment () {
        await this.meditationSegmentButton.click();
    }

    public async enterRunName (name: string) {
        await this.runNameInput.click();
        await this.runNameInput.$('input').setValue(name);
    }

    public async enterDuration (duration: number) {
        await this.durationInput.click();
        await this.durationInput.$('input').setValue(duration);
    }

    public async enterDistance (distance: number) {
        await this.distanceInput.click();
        await this.distanceInput.$('input').setValue(distance);
    }

    public async rateRun (n: number) {
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

    public override open () {
        return super.open('exercise');
    }
}

export default new ExercisesPage();