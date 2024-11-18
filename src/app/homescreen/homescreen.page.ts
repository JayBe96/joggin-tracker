import { Component, OnInit } from '@angular/core';
import { 
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
  IonList,
  IonItem,
  IonContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
  standalone: true,
  imports: [
    IonTabButton,
    IonIcon,
    IonLabel,
    IonTabs,
    IonList,
    IonItem,
    IonContent,
    CommonModule,
    FormsModule,
    TabsComponent
  ]
})
export class HomescreenPage implements OnInit {
  constructor() { }

  ngOnInit() { }
}
