import { Component, inject, signal } from '@angular/core';
import { CounterService } from '../../../services/counter-service';

@Component({
  selector: 'app-contador-b',
  imports: [],
  templateUrl: './contador-b.html',
})
export class ContadorBComponent {
  // TODO: esta lógica está duplicada en ContadorAComponent y cada
  // componente mantiene su propio contador, por eso no están
  // sincronizados. Muévela a CounterService (services/counter-service.ts)
  // y reemplaza contadorSignal/contador/increment()/decrement()/reset() por
  // counterService = inject(CounterService), usando
  // counterService.contador() y sus métodos en el template.
  constructor(public counterService: CounterService){}

}
