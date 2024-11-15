import { Component } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class TabsComponent {
  constructor(private menuCtrl: MenuController) {}

  async openMenu() {
    try {
      await this.menuCtrl.enable(true, 'main-menu');
      await this.menuCtrl.toggle('main-menu');
    } catch (error) {
      console.error('Menu error:', error);
    }
  }
}
