import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from '../tabs/tabs.component';
import { NgModel } from '@angular/forms';
import { ExerciseService } from '../services/exercise.service';
import { HttpClientModule } from '@angular/common/http';

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
  runDuration: number = 5;
  runDistance: number = 1;
  runRating: string = 'normal';

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {}

  saveRun() {
    const newRun = {
      duration: this.runDuration,
      distance: this.runDistance,
      rating: this.runRating
    };

    this.exerciseService.addRun(newRun).subscribe(response => {
      console.log('Run saved successfully', response);
      // Optionally, reset the form or show a success message
    }, error => {
      console.error('Error saving run', error);
    });
  }
}
