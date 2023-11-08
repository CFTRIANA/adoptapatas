import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  // Funciones para mostrar notificaciones (por ejemplo, toast messages)

  showSuccess(message: string): void {
    // Lógica para mostrar notificación de éxito
  }

  showError(message: string): void {
    // Lógica para mostrar notificación de error
  }
}
