import { Routes } from '@angular/router';
import { Reto01CounterService } from './ejercicios/reto-01-counter-service/reto-01-counter-service';
import { Reto02ThemeService } from './ejercicios/reto-02-theme-service/reto-02-theme-service';
import { Reto03NotificationService } from './ejercicios/reto-03-notification-service/reto-03-notification-service';
import { Reto04Productos } from './ejercicios/reto-04-product-service/reto-04-product-service';

export const routes: Routes = [
  {path: '', component: Reto01CounterService},
  {path: 'reto-02', component: Reto02ThemeService},
  {path: 'reto-03', component: Reto03NotificationService},
  {path: 'reto-04', component: Reto04Productos},
];
