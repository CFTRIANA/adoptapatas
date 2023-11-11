

import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { acessoservice } from './acesso.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleGuard implements CanLoad {
  constructor(private acessoservice: acessoservice, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const expectedRole = (route.data as any)?.expectedRole;
    console.log("ESTA SIRVIENDO ESTA MAMADA");

    if (expectedRole === undefined) {
      console.error('Expected role is not defined in route data.');
      return false;
    }

    // Verifica si el usuario está autenticado y tiene el rol esperado
   // const isLoggedIn = this.acessoservice.isLoggedIn();
    const hasExpectedRole = this.acessoservice.getRol() === expectedRole;
console.log("ESTE ES LA ESPECTATIVA "+expectedRole + "este es el rol "+ this.acessoservice.getRol() );
    if ( !hasExpectedRole) {
      console.log('Unauthorized access');
      this.router.navigate(['/unauthorized']);

      return false;
    }

    // Usuario autenticado y tiene el rol esperado, permite la carga del módulo
    console.log(`Module loaded for role ${expectedRole}`);
    return true;
  }



  redirigiradoptar() {
    this.router.navigate(['/unauthorized']);
  }


}
