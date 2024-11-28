import { Component } from '@angular/core';
import { 
  IonApp, 
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  MenuController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonApp, 
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    RouterModule
  ],
})
export class AppComponent {
  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private router: Router
  ) {}

  closeMenu() {
    this.menu.close();
  }

  onLogout() {
    this.authService.logout();
    this.closeMenu();
  }
}
