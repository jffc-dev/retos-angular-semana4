import { Component } from '@angular/core';
import { Reto01CounterService } from './ejercicios/reto-01-counter-service/reto-01-counter-service';
import { Reto02ThemeService } from './ejercicios/reto-02-theme-service/reto-02-theme-service';
import { Reto03NotificationService } from './ejercicios/reto-03-notification-service/reto-03-notification-service';

@Component({
  selector: 'app-root',
  imports: [Reto01CounterService, Reto02ThemeService, Reto03NotificationService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
