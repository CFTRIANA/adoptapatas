import { Component , OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adoptapatas_conect';

  rol: number = 0;

  constructor(private router: Router) {}



  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Navegar a la misma URL para forzar la recarga
        this.router.navigateByUrl(this.router.url);
        console.log("Recargado debido a un cambio en la URL");
        const rolString = sessionStorage.getItem('idRol');


        // Convierte el valor a un número (puede requerir validación)
        this.rol =  rolString ? parseInt(rolString, 10) : 0 ; // 0 por defecto si no se encuentra en Session Storage
        console.log(this.rol);







      }
    });
    // Obtener el valor de "rol" del Session Storage


  }


  cerrarSesion() {
    // Realizar las operaciones necesarias para cerrar sesión
    // Por ejemplo, eliminar variables de sesión y redirigir a la página de inicio de sesión
    sessionStorage.clear(); // Esto eliminará todas las variables de sesión

}
}


