import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
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

  constructor(private exerciseService: ExerciseService) {}

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

  saveRun() {
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
    }, error => {
      console.error('Error saving run', error);
    });
  }

  saveMeditation() {
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
    }, error => {
      console.error('Error saving meditation', error);
    });
  }
}
