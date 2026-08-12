import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  // TODO: crea un signal<number> privado llamado contadorSignal,
  // inicializado en 0, y expón una versión de solo lectura con
  // contador = this.contadorSignal.asReadonly(). Implementa los métodos
  // increment(), decrement() y reset() que actualicen contadorSignal con
  // .update()/.set().
}
