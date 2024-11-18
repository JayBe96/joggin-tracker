import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonBackButton, 
  IonButtons, 
  IonText,
  IonButton,
  IonIcon 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonBackButton, 
    IonButtons, 
    IonText,
    IonButton,
    IonIcon
  ]
})
export class InfoPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
