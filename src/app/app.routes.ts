import { Routes } from '@angular/router';
import { Reto01CounterService } from './features/reto-01-counter-service/reto-01-counter-service';
import { Reto02ThemeService } from './features/reto-02-theme-service/reto-02-theme-service';
import { Reto03NotificationService } from './features/reto-03-notification-service/reto-03-notification-service';
import { Reto04Productos } from './features/reto-04-product-service/reto-04-product-service';
import { HomeComponent } from './features/home/home';
import { NotFoundComponent } from './features/not-found/not-found';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'reto-01', component: Reto01CounterService, children: [
    {path: ':prueba', component: Reto01CounterService}
  ]},
  {path: 'reto-02', component: Reto02ThemeService},
  {path: 'reto-03', component: Reto03NotificationService},
  {path: 'reto-04', component: Reto04Productos},
  {path: '**', component: NotFoundComponent},
];
