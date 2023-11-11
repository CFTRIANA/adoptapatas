import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FoundationService } from '../foundation.service';


@Component({
  selector: 'app-dog-registration',
  templateUrl: './dog-registration.component.html',
  styleUrls: ['./dog-registration.component.scss']
})
export class DogRegistrationComponent {
  // Lógica para el componente de registro de perros

  mostrarMensaje: boolean = false;
  Click: boolean = false;


nombreP: string = '';
raza: string = '';
edad: number = 0;
descripcion: string = '';
fotocanino: string = ''; // La propiedad fotocanino será la que contendrá la ruta de la foto del canino seleccionada
estadoSalud: string = '';
temperamento: string = '';
vacunas: boolean = true;
disponibilidad:boolean = true;
miToken: string | null = sessionStorage.getItem('token');
mostrarAlerta: boolean = false;
  constructor(private router: Router, private FoundationService: FoundationService) {
    // Constructor de tu componente
  }





  onSubmit(r: NgForm){

    //se envia en tipo credential
 // console.log( this.username,this.lastname,this.email,this.number,this.address,this.municipality,this.department,this.user,this.password)



  var Credential = {
    nombre: this.nombreP,
    raza: this.raza,
    edad: this.edad,
    descripcion: this.descripcion,
    imagen: this.fotocanino,
    estadoSalud: this.estadoSalud,
    temperamento: this.temperamento,
    vacunas: this.vacunas,
    disponibilidad: this.disponibilidad,
    fkFundation : sessionStorage.getItem('idUsuario')
  };


  console.log(Credential);


  if (this.miToken !== null ) {
   var credentialR =  this.FoundationService.registroCanino(Credential , this.miToken );

   credentialR.subscribe(
    (data:any) => {

    if( data.respuesta === 1){


      setTimeout(() => {
        // Oculta el mensaje después de 2 segundos
        this.mostrarAlerta = true;

      }, 5000);


    console.log("SE HA REALIZADO EXITOSAMENTE EL REGISTRO DEL CANINO");
   // this.redirigiradoptar();



    }
    if(data.respuesta === 0 ){

      console.log('NO SE HA REALIZADO EL REGISTRO CANINO');

      //this.mostrarAlerta = true;
    }
    // Aquí puedes acceder a las propiedades de "data" si es necesario


    },
    (error) => {

      console.error('Ocurrió un  error en registro:', error);

      // Manejar errores si es necesario
    }
  );

  }

  }


  redirigiradoptar() {
    this.router.navigate(['/adopter-dashboard']);
  }





  onFileSelected(event: any, field: 'fotocanino' ): void {
    const file = event.target.files[0];
    if (file) {
      this.readFile(file).then((base64) => {
        this[field] = base64;
        console.log(this[field]);
      });
    }
  }
  readFile(file: File): Promise<string> {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        resolve(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  handleClick() {
    // Este método se activará al hacer clic en cualquier parte de la pantalla
    this.Click = true; // Marca la solicitud como realizada
    //  this.router.navigate(['/foundation-registration']);
   //   this.mostrarMensaje = true;

    // Puedes realizar las acciones que desees aquí
  }


}




