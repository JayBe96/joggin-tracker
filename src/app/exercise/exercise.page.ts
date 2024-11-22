import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from '../tabs/tabs.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsComponent
  ]
})
export class ExercisePage implements OnInit {
  selectedExercise: string = '';
  runDuration: number = 0;
  runDistance: number = 0;
  runRating: string = '';

  constructor() {}

  ngOnInit() {}

  saveRun() {
    // Implement save functionality here
  }
}
