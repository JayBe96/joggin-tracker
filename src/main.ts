import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbellOutline, statsChartOutline, menuOutline, homeOutline, logoGithub, trash } from 'ionicons/icons';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

addIcons({
  'barbell-outline': barbellOutline,
  'stats-chart-outline': statsChartOutline,
  'home-outline': homeOutline,
  'menu-outline': menuOutline,
  'logo-github': logoGithub,
  'trash': trash
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient()
  ],
});
