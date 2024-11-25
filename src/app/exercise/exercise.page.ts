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
  runName: string = '';
  runDuration: number = 5;
  runDistance: number = 1;
  runRating: string = 'normal';

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.setInitialRunName();
  }

  setInitialRunName() {
    this.exerciseService.getRuns().subscribe(runs => {
      const runCount = runs.length;
      this.runName = `Run ${runCount + 1}`;
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
      // Optionally, reset the form or show a success message
      this.setInitialRunName(); // Update the run name for the next run
    }, error => {
      console.error('Error saving run', error);
    });
  }
}
