import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { interval, Subscription } from 'rxjs';

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
export class HomescreenPage implements OnInit, OnDestroy {
  isDumbbellMode = false;
  private autoToggleSubscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    // Initialize background image
    document.documentElement.style.setProperty(
      '--background-image',
      'url("/assets/images/hometrack.png")'
    );

    // Start auto-toggle every 5 seconds
    this.autoToggleSubscription = interval(5000).subscribe(() => {
      this.toggleBackground();
    });
  }

  ngOnDestroy() {
    if (this.autoToggleSubscription) {
      this.autoToggleSubscription.unsubscribe();
    }
  }

  toggleBackground() {
    this.isDumbbellMode = !this.isDumbbellMode;
    document.documentElement.style.setProperty(
      '--background-image',
      `url('/assets/images/${this.isDumbbellMode ? 'homedumbbell.png' : 'hometrack.png'}')`
    );
  }
}