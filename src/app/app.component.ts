import { Component , OnInit  } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adoptapatas_conect';

  rol: number =  3 ;




  ngOnInit(): void {
    // Obtener el valor de "rol" del Session Storage
    const rolString = sessionStorage.getItem('rol');


    // Convierte el valor a un número (puede requerir validación)
    this.rol = rolString ? parseInt(rolString, 10) : 1 ; // 0 por defecto si no se encuentra en Session Storage
    console.log(this.rol);

  }
}


