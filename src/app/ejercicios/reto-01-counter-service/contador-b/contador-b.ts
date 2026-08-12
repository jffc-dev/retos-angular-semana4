import { Component, inject } from '@angular/core';
import { CounterService } from '../../../services/counter-service';

@Component({
  selector: 'app-contador-b',
  imports: [],
  templateUrl: './contador-b.html',
})
export class ContadorBComponent {
  // TODO: inyecta CounterService con inject() en una propiedad
  // "counterService" para usar counterService.contador() y sus métodos
  // increment()/decrement()/reset() en el template.
}
