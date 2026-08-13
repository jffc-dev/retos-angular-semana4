import { Component, signal } from '@angular/core';

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

  private contadorSignal = signal(0);

  contador = this.contadorSignal.asReadonly();

  increment(): void {
    this.contadorSignal.update((valorActual) => valorActual + 1);
  }

  decrement(): void {
    this.contadorSignal.update((valorActual) => valorActual - 1);
  }

  reset(): void {
    this.contadorSignal.set(0);
  }
}
