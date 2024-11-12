import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbellOutline, statsChartOutline } from 'ionicons/icons';

addIcons({
  'barbell-outline': barbellOutline,
  'stats-chart-outline': statsChartOutline
});

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonTabs,
    CommonModule,
    FormsModule
  ]
})
export class HomescreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
