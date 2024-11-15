import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs, IonList, IonItem } from '@ionic/angular/standalone';
import { TabsComponent } from '../tabs/tabs.component';

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
    IonList,
    IonItem,
    CommonModule,
    FormsModule,
    TabsComponent
  ]
})
export class HomescreenPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
