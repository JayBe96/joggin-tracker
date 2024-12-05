import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular'; // Import ToastController
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from '../tabs/tabs.component';
import { ExerciseService } from '../services/exercise.service';
import { HttpClientModule } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsComponent,
    HttpClientModule
  ]
})
export class ExercisePage implements OnInit {
  selectedExercise: string = 'run';

  // run properties
  runName: string = '';
  runDuration: number = 5;
  runDistance: number = 1;
  runRating: string = 'normal';

  // meditation properties
  meditationName: string = '';
  meditationDuration: number = 10;
  meditationType: string = 'Mindfulness meditation';
  meditationRating: string = 'normal';

  isSaving: boolean = false; // Add a boolean flag for disabling inputs

  constructor(private exerciseService: ExerciseService, private toastController: ToastController) {} // Inject ToastController

  ngOnInit() {
    this.setInitialRunName();
    this.setInitialMeditationName();
  }

  setInitialRunName() {
    this.exerciseService.getRuns().subscribe(runs => {
      const runCount = runs.length;
      this.runName = `Run ${runCount + 1}`;
    });
  }

  setInitialMeditationName() {
    this.exerciseService.getMeditations().subscribe(meditations => {
      const meditationCount = meditations.length;
      this.meditationName = `Meditation ${meditationCount + 1}`;
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'light'
    });
    await toast.present();

    setTimeout(async () => {
      toast.color = 'success';
      await toast.present();
      this.isSaving = false; // Enable inputs after success toast
      if (message.includes('Run')) {
        this.resetRunFields(); // Reset run fields after success toast
      } else if (message.includes('Meditation')) {
        this.resetMeditationFields(); // Reset meditation fields after success toast
      }
    }, 1000);
  }

  resetRunFields() {
    this.runDuration = 5;
    this.runDistance = 1;
    this.runRating = 'normal';
  }

  resetMeditationFields() {
    this.meditationDuration = 10;
    this.meditationType = 'Mindfulness meditation';
    this.meditationRating = 'normal';
  }

  saveRun() {
    this.isSaving = true; // Disable inputs while saving
    const newRun = {
      id: uuidv4(),
      name: this.runName,
      duration: this.runDuration,
      distance: this.runDistance,
      rating: this.runRating
    };

    this.exerciseService.addRun(newRun).subscribe(response => {
      console.log('Run saved successfully', response);
      this.setInitialRunName();
      this.presentToast('Run saved successfully!');
    }, error => {
      console.error('Error saving run', error);
      this.isSaving = false; // Enable inputs if there's an error
    });
  }

  saveMeditation() {
    this.isSaving = true; // Disable inputs while saving
    const newMeditation = {
      id: uuidv4(),
      name: this.meditationName,
      duration: this.meditationDuration,
      type: this.meditationType,
      rating: this.meditationRating
    };

    this.exerciseService.addMeditation(newMeditation).subscribe(response => {
      console.log('Meditation saved successfully', response);
      this.setInitialMeditationName();
      this.presentToast('Meditation saved successfully!');
    }, error => {
      console.error('Error saving meditation', error);
      this.isSaving = false; // Enable inputs if there's an error
    });
  }
}
