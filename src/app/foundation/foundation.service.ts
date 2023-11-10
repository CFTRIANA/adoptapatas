import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoundationService {
  private apiUrl = 'https://adoptapataswebapi.azurewebsites.net'; // Reemplaza 'URL_DE_TU_API' con la URL real de tu API

  constructor(private http: HttpClient) { }

  // Registro de Fundación
  registroFundacion(foundationData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registroFundacion`, foundationData);
  }



  registroCanino(credential: any ,token: string ): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.apiUrl}/crear`;

    return this.http.post<any[]>(url, credential, { headers });
  }

  // Actualización de Fundación
  updateFoundation(foundationId: number, foundationData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/foundations/${foundationId}/update`, foundationData);
  }

  // Obtener lista de Fundaciones
  getFoundations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/foundations`);
  }

  // Obtener detalles de Fundación por ID
  getFoundationDetails(foundationId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/foundations/${foundationId}`);
  }

  // Eliminar Fundación por ID
  deleteFoundation(foundationId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/foundations/${foundationId}/delete`);
  }
}
