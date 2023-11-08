// role.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'URL_DE_TU_API'; // Reemplaza 'URL_DE_TU_API' con la URL real de tu API

  constructor(private http: HttpClient) { }

  // Función para obtener la lista de roles desde el backend
  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/roles`);
  }

  // Función para crear un nuevo rol
  createRole(roleData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/roles/create`, roleData);
  }

  // Función para eliminar un rol existente
  deleteRole(roleId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/roles/${roleId}/delete`);
  }
}
