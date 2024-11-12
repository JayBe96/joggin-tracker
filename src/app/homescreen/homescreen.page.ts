import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomescreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
