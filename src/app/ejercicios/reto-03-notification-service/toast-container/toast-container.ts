import { Component, inject } from '@angular/core';
import { NotificationService } from '../../../services/notification-service';

@Component({
  selector: 'app-toast-container',
  imports: [],
  templateUrl: './toast-container.html',
})
export class ToastContainerComponent {
  // TODO: inyecta NotificationService con inject() en una propiedad
  // "notificationService" y recorre notificationService.notificaciones()
  // con @for en el template; cada toast debe poder cerrarse llamando
  // notificationService.dismiss(id).
}
