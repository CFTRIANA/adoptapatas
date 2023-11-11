import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {
  nombreCanin: string | null = null;
  edadCanino: string | null = null;
  razaCanino: string | null = null;
  nombreUsuario: string | null = null;
  correoUsuario: string | null = null;
  idUsuario: string | null = null;
  token: string | null = null;
  idRol: string | null = null;
  nombre: string | null = null;
  correo: string | null = null;

  ngOnInit() {
    // Asigna los valores de sessionStorage a las propiedades de la clase
    this.nombreCanin = sessionStorage.getItem('nombreCanin');
    this.edadCanino = sessionStorage.getItem('edadCanino');
    this.razaCanino = sessionStorage.getItem('razaCanino');
    this.nombre = sessionStorage.getItem('nombre');
    this.correo = sessionStorage.getItem('correo');



    // Imprime los valores en la consola
    console.log("este es nombre ", this.nombreCanin);
    console.log("esta es edad", this.edadCanino);
    console.log("esta es raza", this.razaCanino);
    console.log("Nombre", this.nombre);
    console.log("CORREO:", this.correo);
    console.log("SE HA INICIADO SESION ");
  }
}

