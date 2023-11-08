// authentication.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://localhost:44312'; // Reemplaza 'URL_DE_TU_API' con la URL real de tu API

  constructor(private http: HttpClient) { }



  // Función para iniciar sesión
  login(credentials: { usuario: string, contrasena: string }): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/login`, credentials);

  }


  //registro

  registro(credentials: {
    nombre: string,
    apellido: string,
    correo: string,
    celular: string,
    direccion: string,
    municipio: string,
    departamento: string,
    usuario: string,
    contrasena: string
  }): Observable<any> {
    
  
    console.log('Objeto credentials antes de la solicitud POST:', credentials); // Imprimir el objeto en la consola
  
    return this.http.post<any>(`${this.apiUrl}/registro`, credentials);
  }




  registro2(credentials: {
    nombre: string,
    apellido: string,
    correo: string,
    celular: string,
    direccion: string,
    municipio: string,
    departamento: string,
    usuario: string,
    contrasena: string
  }): Observable<any> {
    
    console.log('Objeto credentials antes de la solicitud POST:', credentials); // Imprimir el objeto en la consola

    return this.http.post<any>(`${this.apiUrl}/registro`, credentials);

    
  }


  // Función para obtener información del usuario autenticado
  getUserInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user`);
  }

  // Función para obtener roles desde el backend (si es necesario)
  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/roles`);
  }

  // Función para asignar un rol a un usuario
  assignRole(userId: number, roleId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/${userId}/assign-role/${roleId}`, {});
  }

  // Función para eliminar un rol de un usuario
  removeRole(userId: number, roleId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/${userId}/remove-role/${roleId}`);
  }

  // Función para cerrar sesión
  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }
}
