import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FoundationService } from '../foundation.service';


@Component({
  selector: 'app-foundation-registration',
  templateUrl: './foundation-registration.component.html',
  styleUrls: ['./foundation-registration.component.scss']
})
export class FoundationRegistrationComponent {
  // Lógica para el componente de registro de fundaciones

  mostrarMensaje: boolean = false;
  Click: boolean = false;

  nombreRepresentante: string = '';
  nombreFundacion: string = '';
  direccion: string = '';
  municipio: string = '';
  departamento: string = '';
  correo: string = '';
  telefono: string = '';
  celular: string = '';
  descripcion: string = '';
  mision: string = '';
  vision: string = '';
  objetivoSocial: string = '';
  logoFundacion: string ='';
  fotoFundacion: string | null = null;
  mostrarAlerta: boolean = false;

  constructor(private router: Router, private FoundationService: FoundationService) {
    // Constructor de tu componente
  }


  miToken: string | null = sessionStorage.getItem('token');




  onSubmit(r: NgForm){

    //se envia en tipo credential
 // console.log( this.username,this.lastname,this.email,this.number,this.address,this.municipality,this.department,this.user,this.password)





  console.log(
    this.nombreRepresentante,
    this.nombreFundacion,
    this.direccion,
    this.municipio,
    this.departamento,
    this.correo,
    this.telefono,
    this.celular,
    this.descripcion,
    this.mision,
    this.vision,
    this.objetivoSocial

  );

  var Credential = {
    nombreRepresentante: this.nombreRepresentante,
    nombreFundacion: this.nombreFundacion ,
    direccion: this.direccion ,
    municipio:this.municipio ,
    departamento:  this.departamento,
    correo: this.correo ,
   telefono:this.telefono,
    celular: this.celular,
    descripcion:this.descripcion,
      mision:this.mision ,
      vision:this.vision ,
      objetivoSocial:this.objetivoSocial ,
      logoFundacion: this.logoFundacion,
        fotoFundacion: this.fotoFundacion  };




   var credentialR =  this.FoundationService.registroFundacion(Credential);


   console.log(Credential);
console.log(credentialR);

   credentialR.subscribe(
    (data:number) => {

    if( data === 1){

    console.log("SE HA REALIZADO EXITOSAMENTE EL REGISTRO DE FUNDACION");
    this.mostrarAlerta = true;
   // this.redirigiradoptar();



    }
    if(data === 0 ){

      console.log('NO SE HA REALIZADO EL REGISTRO ');

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


  redirigiradoptar() {
    this.router.navigate(['/adopter-dashboard']);
  }





  onFileSelected(event: any, field: 'logoFundacion'): void {
    const file = event.target.files[0];
    if (file) {
      this.readFile(file).then((base64) => {
        this[field] = base64;
        console.log(this[field]);

      });
    }
  }

  onFileSelected2(event: any, field:  'fotoFundacion'): void {
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

