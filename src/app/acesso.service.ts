import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class acessoservice {
  getRol(): number | null {
    const idRol = sessionStorage.getItem('idRol');
    return idRol ? +idRol : null;
  }

  isLoggedIn(): boolean {
    return !!this.getRol();
  }
}
