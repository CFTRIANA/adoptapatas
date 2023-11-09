import { ModeratorService } from './../moderator.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-foundation-requests',
  templateUrl: './foundation-requests.component.html',
  styleUrls: ['./foundation-requests.component.scss']
})
export class FoundationRequestsComponent implements OnInit {

  miToken: string | null = sessionStorage.getItem('token');
  fundaciones: any[] = [];
  mostrarAlerta2: boolean = false;
  fundacionesSeleccionada: any[] = [];

  constructor(private router: Router, private moderatorService: ModeratorService,private cdRef: ChangeDetectorRef) {
    // Constructor de tu componente
  }


  ngOnInit() {
    // Lógica de inicialización del componente

    if (this.miToken !== null) {
      // Ahora TypeScript sabe que miToken no es null
      this.moderatorService.obtenerfundaciones(this.miToken).subscribe(
        data => {
          // Manejar la respuesta
          this.fundaciones = data;
          // Forzar la detección de cambios para actualizar la vista
          this.cdRef.detectChanges();

          console.log(data);
        },
        error => {
          // Manejar errores
          console.error("un error al odtener : "+ error);
        }
      );
      // Resto de la lógica utilizando this.miToken
    } else {
      console.error('El token es nulo');
    }
  }

  seleccionarFundacion(fundacion: any) {
    // Si ya hay una fundación seleccionada, deselecciónala
    if (this.fundacionesSeleccionada.length > 0) {
      // Verifica si la fundación actual ya está seleccionada
      const index = this.fundacionesSeleccionada.findIndex(selected => selected.idFundacion === fundacion.idFundacion);

      if (index === -1) {
        // Si la fundación actual no está seleccionada, deselecciona la anterior
        this.fundacionesSeleccionada = [];
      } else {
        // Si la fundación actual ya está seleccionada, deselecciónala
        this.fundacionesSeleccionada.splice(index, 1);
        return;
      }
    }

    // Añade la nueva fundación seleccionada
    this.fundacionesSeleccionada.push(fundacion);
  }

  procesarSeleccion() {
    // Haz lo que necesitas con la fundación seleccionada

    if (this.fundacionesSeleccionada.length > 0) {
      const idSeleccionado: string = this.fundacionesSeleccionada[0].idFundacion.toString();
      console.log('ID de la fundación seleccionada:', idSeleccionado);

      // Crea el objeto con la estructura requerida

      var Credential = {
        "id": idSeleccionado
      };


      if (this.miToken !== null ) {
        console.log(Credential );
        console.log(this.miToken)
        this.moderatorService.activarfundacion(this.miToken, Credential).subscribe(
          (data:any) => {
            // Maneja la respuesta aquí si es necesario
            console.log('Respuesta del servicio:', data);

            if (data.respuesta === 1) {
              console.log('Activación exitosa.');
              this.mostrarAlerta2 = true;
              setTimeout(() => {
                // Oculta el mensaje después de 2 segundos
                this.mostrarAlerta2 = false;
              }, 3000);


            } else {
              console.error('Error en la activación. Mensaje:', data.mensaje);
            }
          },
          (error) => {
            // Maneja los errores aquí si es necesario
            console.error('Error en la solicitud:', error);
          }
        );
  }
}










}
}

