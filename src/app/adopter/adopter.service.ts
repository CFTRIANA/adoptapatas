import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdopterService {
  private apiUrl = 'https://adoptapataswebapi.azurewebsites.net';
  constructor(private http: HttpClient) { }


  obtenerCaninos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/disponibles`);
  }

}
