import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class acessoservice {
  getRol(): number | null {
    const idRol = sessionStorage.getItem('idRol');
    return idRol ? +idRol : null; // Convierte a número o devuelve null si es nulo
  }

  isLoggedIn(): boolean {
    return !!this.getRol();
  }
}
