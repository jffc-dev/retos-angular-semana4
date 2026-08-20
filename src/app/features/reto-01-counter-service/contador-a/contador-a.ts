import { Component, inject, signal } from '@angular/core';
import { CounterService } from '../../../services/counter-service';

@Component({
  selector: 'app-contador-a',
  imports: [],
  templateUrl: './contador-a.html',
})
export class ContadorAComponent {
  // TODO: esta lógica está duplicada en ContadorBComponent y cada
  // componente mantiene su propio contador, por eso no están
  // sincronizados. Muévela a CounterService (services/counter-service.ts)
  // y reemplaza contadorSignal/contador/increment()/decrement()/reset() por
  // counterService = inject(CounterService), usando
  // counterService.contador() y sus métodos en el template.

  counterService = inject(CounterService)

}
