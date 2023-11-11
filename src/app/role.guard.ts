

// role.guard.ts

import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment ,Router} from '@angular/router';
import {acessoservice } from './/acesso.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleGuard implements CanLoad {
  constructor(private acessoservice: acessoservice ,private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const expectedRole = (route.data as any)?.expectedRole;

    if (!this.acessoservice.isLoggedIn() || this.acessoservice.getRol() !== expectedRole) {
      // Redirige a una página de acceso denegado o inicio de sesión si es necesario
      this.router.navigate(['/unauthorized']);

      return false;
    }

    return true;
  }
}
