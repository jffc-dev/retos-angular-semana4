import { Component, inject } from '@angular/core';
import { CounterService } from '../../../services/counter-service';

@Component({
  selector: 'app-contador-a',
  imports: [],
  templateUrl: './contador-a.html',
})
export class ContadorAComponent {
  // TODO: inyecta CounterService con inject() en una propiedad
  // "counterService" para usar counterService.contador() y sus métodos
  // increment()/decrement()/reset() en el template.
}
