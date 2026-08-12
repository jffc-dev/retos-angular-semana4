import { Injectable, signal } from '@angular/core';
import { INotificacion, TipoNotificacion } from '../interfaces/notificacion.interface';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  // TODO: crea un signal<INotificacion[]> privado llamado
  // notificacionesSignal, inicializado en un arreglo vacío, y expón
  // notificaciones = this.notificacionesSignal.asReadonly(). Implementa
  // show(mensaje: string, tipo: TipoNotificacion) que agregue una
  // notificación nueva (usa Date.now() como id) al arreglo con .update(),
  // y dismiss(id: number) que la elimine filtrando por id con .update().
}
