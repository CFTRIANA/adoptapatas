import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canino',
  templateUrl: './adopter-dashboard.component.html', // Cambia el nombre del archivo HTML
  styleUrls: ['./adopter-dashboard.component.scss']
})
export class AdopterDashboardComponent implements OnInit {
  imagenActual: string='jaja';
  nombre: string='rogelio';
  fundacion: string='me lo pela.net';
  edad: number= 12;
  raza: string='de la calle';
  descripcion: string= 'es bonito pero me lo pela';
   estadoSalud: string = 'Bueno'; // Valor inicial
  temperamento: string='muerde muchoooo';

  constructor() {}
  //CON BASE 64 IMAGENES
  //COMPONENTE DE ANGULAROCN BANNER


  ngOnInit() {
    //ROL = ADMIN
    this.imagenActual = 'URL de la primera imagen'; // Establece la URL de la imagen inicial
    this.nombre = 'Nombre del Canino 1'; // Establece la información inicial
    this.fundacion = 'Fundación 1';
    this.edad = 2;
    this.raza = 'Raza 1';
    this.descripcion = 'Una breve descripción del canino 1.';
    this.estadoSalud = 'Bueno';
    this.temperamento = 'Amigable y juguetón';
  }

  cambiarContenido(n: number) {
    // Implementa lógica para cambiar la información y la imagen según n (anterior o siguiente)
    // Por ejemplo, puedes cambiar las propiedades en función del índice actual.
    // Asegúrate de manejar los límites para evitar errores.
  }

}
