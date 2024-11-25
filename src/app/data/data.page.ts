import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { TabsComponent } from '../tabs/tabs.component';
import { DataService } from '../services/data.service';

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
  runs: any[] = [];
  meditations: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  ionViewWillEnter() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getRuns().subscribe(data => {
      this.runs = data;
    });

    this.dataService.getMeditations().subscribe(data => {
      this.meditations = data;
    });
  }
}
