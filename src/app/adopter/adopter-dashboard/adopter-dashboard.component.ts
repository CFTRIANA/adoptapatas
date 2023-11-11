import { AdopterService } from './../adopter.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-canino',
  templateUrl: './adopter-dashboard.component.html', // Cambia el nombre del archivo HTML
  styleUrls: ['./adopter-dashboard.component.scss']
})
export class AdopterDashboardComponent implements OnInit {
  imagenActual: string='';
  nombre: string='';
  fundacion: string='';
  edad: number= 0;
  raza: string='';
  descripcion: string= '';
   estadoSalud: string = ''; // Valor inicial
  temperamento: string='';
  imagenBase64: string = '';

  caninos: any[] = []; // Array para almacenar la lista de caninos
  indiceCaninoActual: number = 0;

  constructor(private AdopterService: AdopterService) {}

  ngOnInit() {

    this.mostrarCanino();


  }


  mostrarCanino() {
    var credentialR = this.AdopterService.obtenerCaninos();

    credentialR.subscribe(
      (data: any[]) => {
        this.caninos = data;
        // Mostrar el primer canino al cargar la página
        this.mostrarCaninoActual();
        console.log("SE HA REALIZADO EXITOSAMENTE EL REGISTRO DE FUNDACION");

      },
      (error) => {
        console.error('Ocurrió un error al obtener los caninos:', error);
        // Manejar errores si es necesario
      }
    );
  }




  mostrarCaninoActual() {
    const canino = this.caninos[this.indiceCaninoActual];
    if (canino) {
      // Asignar valores del canino actual

      this.imagenBase64 = canino.imagen;
      this.nombre = canino.nombre;
      this.fundacion = canino.fundacion;
      this.edad = canino.edad;
      this.raza = canino.raza;
      this.descripcion = canino.descripcion;
      this.estadoSalud = canino.estadoSalud;
      this.temperamento = canino.temperamento;
      this.mostrarImagen(this.imagenBase64);
    }
  }


  cambiarCaninoadelante() {
    // Cambiar al siguiente canino
    this.indiceCaninoActual = (this.indiceCaninoActual + 1) % this.caninos.length;
    this.mostrarCaninoActual();
  }
  cambiarCaninoatras() {
    // Cambiar al siguiente canino
    this.indiceCaninoActual = (this.indiceCaninoActual - 1) % this.caninos.length;
    this.mostrarCaninoActual();
  }



  // Método para establecer la imagen
  mostrarImagen(cadenaBase64: string): void {
    this.imagenBase64 = cadenaBase64;
  }




}
