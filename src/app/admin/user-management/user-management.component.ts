import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  users: any[] = [];
deleteUser: any;

  editRole(userId: number) {
    // Lógica para editar el rol del usuario con el ID proporcionado
  }
}
