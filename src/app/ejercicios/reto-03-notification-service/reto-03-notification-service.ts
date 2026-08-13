import { Component, inject } from '@angular/core';
import { ToastContainerComponent } from './toast-container/toast-container';
import { NotificationService } from '../../services/notification-service';

@Component({
  selector: 'app-reto-03-notification-service',
  imports: [ToastContainerComponent],
  templateUrl: './reto-03-notification-service.html',
})
export class Reto03NotificationService {
  // TODO: inyecta NotificationService con inject() en una propiedad
  // "notificationService" y úsala en los botones del template para llamar
  // notificationService.show(mensaje, tipo) con distintos tipos
  // ('info' | 'exito' | 'error' | 'advertencia').

  notificationService = inject(NotificationService)
}
