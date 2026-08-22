import { Component, inject, input, Input, signal } from '@angular/core';
import { ContadorAComponent } from './contador-a/contador-a';
import { ContadorBComponent } from './contador-b/contador-b';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reto-01-counter-service',
  imports: [ContadorAComponent, ContadorBComponent],
  templateUrl: './reto-01-counter-service.html',
  styleUrl: './reto-01-counter-service.css'
})
export class Reto01CounterService {
  private route = inject(ActivatedRoute)
  parametro = signal<string>('')

  prueba = this.route.paramMap.subscribe((dato) => {
    this.parametro.set(dato.get('prueba')!)
  })
}
