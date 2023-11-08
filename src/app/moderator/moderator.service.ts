import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {
  private apiUrl = 'URL_DE_TU_API'; // Reemplaza 'URL_DE_TU_API' con la URL real de tu API

  constructor(private http: HttpClient) { }

  // Obtener solicitudes de fundaciones pendientes
  getFoundationRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/moderator/foundation-requests`);
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
