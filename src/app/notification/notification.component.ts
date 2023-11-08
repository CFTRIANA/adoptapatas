
import { Component} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  //@Input() message: string = ''; // Asignar un valor inicial vacío

  closeNotification() {
    // Aquí puedes implementar la lógica para cerrar la notificación
  }
}
