import { Component } from '@angular/core';
import { ContadorAComponent } from './contador-a/contador-a';
import { ContadorBComponent } from './contador-b/contador-b';

@Component({
  selector: 'app-reto-01-counter-service',
  imports: [ContadorAComponent, ContadorBComponent],
  templateUrl: './reto-01-counter-service.html',
})
export class Reto01CounterService {}
