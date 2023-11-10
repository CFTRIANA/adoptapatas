import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {
  private apiUrl = 'https://adoptapataswebapi.azurewebsites.net'; // Reemplaza 'URL_DE_TU_API' con la URL real de tu API

  constructor(private http: HttpClient) { }

  // Obtener solicitudes de fundaciones pendientes
  obtenerfundacionesc(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/obtenerfundaciones`);
  }

  obtenerfundaciones(token: string): Observable<any[]> {
    // Configurar el encabezado de autorización con el token Bearer
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // Realizar la solicitud HTTP con el encabezado de autorización
    return this.http.get<any[]>(`${this.apiUrl}/obtenerfundaciones`, { headers });
  }




  activarfundacion(token: string, foundationData: any): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.apiUrl}/activarfundacion`;

    return this.http.post<any[]>(url, foundationData, { headers });
  }

  // Validar una solicitud de fundación
  approveFoundationRequest(foundationId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/moderator/foundation-requests/approve/${foundationId}`, null);
  }

  // Rechazar una solicitud de fundación
  rejectFoundationRequest(foundationId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/moderator/foundation-requests/reject/${foundationId}`, null);
  }

  // Generar informe de adopciones
  generateAdoptionReport(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/moderator/reports/adoption?start=${startDate.toISOString()}&end=${endDate.toISOString()}`);
  }

  // Generar informe de donaciones
  generateDonationReport(startDate: Date, endDate: Date): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/moderator/reports/donation?start=${startDate.toISOString()}&end=${endDate.toISOString()}`);
  }
}
