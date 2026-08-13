import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  // TODO: ContadorAComponent y ContadorBComponent ya tienen la lógica de
  // contador escrita de forma local (contadorSignal, contador, increment(),
  // decrement(), reset()), pero cada uno mantiene su propio estado y no
  // están sincronizados. Muévela aquí: un signal<number> privado
  // contadorSignal (inicia en 0), una versión de solo lectura contador =
  // this.contadorSignal.asReadonly(), y los mismos tres métodos
  // actualizando contadorSignal con .update()/.set().
}
