import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  Click: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService) {
    // Constructor de tu componente
  }


  mostrarAlerta: boolean = false;
  mostrarAlerta2: boolean = false;

  onSubmit(f: NgForm){

    //se envia en tipo credential
  console.log(this.username,this.password)

  var Credential = {usuario : this.username, contrasena : this.password};

   var credentialR =  this.authService.InicioSesion(Credential);

   credentialR.subscribe(
    (data) => {

    if( data.respuesta === 1){


    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('idUsuario', data.id);
    sessionStorage.setItem('idRol',data.idRol);
    sessionStorage.setItem('nombre',data.nombre);
    sessionStorage.setItem('correo',data.correo);
    console.log("este es el id"+sessionStorage.getItem('idUsuario'));
    console.log("este es el token"+sessionStorage.getItem('token'));
    console.log("este es el rol"+sessionStorage.getItem('idRol'))
    console.log("Nombre"+sessionStorage.getItem('nombre'))
    console.log("CORREO:"+sessionStorage.getItem('correo'))
    console.log("SE HA INICIADO SESION ");
    //console.log(sessionStorage.getItem('token'))

    this.mostrarAlerta2 = true;

    setTimeout(() => {

      this.redirigiradoptar();

    }, 5000);


  }
    // Aquí puedes acceder a las propiedades de "data" si es necesario


    },
    (error) => {
      if (error.status === 400) {
        // Manejar el Bad Request aquí
        console.log("Bad Request del servidor ");
        this.mostrarAlerta = true;
      } else {
        this.mostrarAlerta = true;
        console.error("Error en la solicitud al servidor:", error);
      }
    }
  );



  }

  redirigiradoptar() {
    this.router.navigate(['/adopter-dashboard']);
  }


  handleClick() {
    // Este método se activará al hacer clic en cualquier parte de la pantalla
    this.Click = true; // Marca la solicitud como realizada
    //  this.router.navigate(['/foundation-registration']);
    //  this.mostrarAlerta = true;

    // Puedes realizar las acciones que desees aquí
  }
/*
  RegistrarFundacion() {
    // Lógica para realizar acciones antes de redirigir a la página de registro
    this.Click = true; // Marca la solicitud como realizada
  //  this.router.navigate(['/foundation-registration']);
    this.mostrarMensaje = true;
  }

  */
  // Aquí puedes agregar la lógica para manejar el inicio de sesión
  login() {
    // Lógica para enviar los datos de inicio de sesión a la API o servicio correspondiente
    console.log('Iniciar sesión con:', this.username, this.password);

    //const inicioSesionExitoso = true; // Reemplaza esto con tu lógica real



  }
}
