import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { TabsComponent } from '../tabs/tabs.component';
import { DataService } from '../services/data.service';
import { Run } from '../models/run.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TabsComponent,
    IonList, IonListHeader, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ]
})
export class DataPage implements OnInit {
  runs: Run[] = [];
  meditations: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  ionViewWillEnter() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getRuns().subscribe((data: Run[]) => {
      this.runs = data.map((run: Run) => ({
        ...run,
        speed: this.calculateSpeed(run.distance, run.duration),
        pace: this.calculatePace(run.distance, run.duration)
      }));
    });

    this.dataService.getMeditations().subscribe(data => {
      this.meditations = data;
    });
  }

  calculateSpeed(distance: number, duration: number): string {
    const speed = distance / (duration / 60);
    return `${speed.toFixed(1)} km/h`;
  }

  calculatePace(distance: number, duration: number): string {
    const pace = duration / distance;
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds} min/km`;
  }
}
