import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  lastname: string = '';
  email: string = '';
  number: string = '';
  address: string = '';
  municipality : string = '';
  department: string = '';
  user: string = '';
  password: string = '';
  showNotification: boolean = false;
  mostrarMensaje: boolean = false;
  mostrarAlerta: boolean = false;
  constructor(private router: Router, private authService: AuthenticationService) {
    // Constructor de tu componente
  }

  onSubmit(r: NgForm){

    //se envia en tipo credential
  console.log( this.username,this.lastname,this.email,this.number,this.address,this.municipality,this.department,this.user,this.password)

 



  
  var Credential = {
    nombre: this.username,
    apellido: this.lastname,
    correo: this.email,
    celular: this.number,
    direccion: this.address,
    municipio: this.municipality,
    departamento: this.department,
    usuario: this.user,
    contrasena: this.password
  };

   var credentialR =  this.authService.registro(Credential);

  
   credentialR.subscribe(
    (data: number) => {
      if (data === 1) {

        this.mostrarAlerta = true;
        
        setTimeout(() => {
          
          this.redirigiradoptar();
    
        }, 6000); // Cerrar la notificación después de 2 segundos y redirigir
      } else if (data === 0) {
        console.log("NO SE HA INICIADO SESIÓN");
      }
    }
  );

  }




  
  
redirigiradoptar() {
    this.router.navigate(['/adopter-dashboard']);
  }


  // Aquí puedes agregar la lógica para manejar el registro

}



