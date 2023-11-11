import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdopterService} from '../adopter.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent {

  // Lógica del componente de adopción
  constructor(private router: Router, private AdopterService: AdopterService) {
    // Constructor de tu componente
  }
  rols: string = "";
 roln: number = 0;

  ngOnInit(): void {

    const rolString = sessionStorage.getItem('idRol');
  // Convierte el valor a un número (puede requerir validación)
  this.roln =  rolString ? parseInt(rolString, 10) : 0 ; // 0 por defecto si no se encuentra en Session Storage

  if (rolString !== null) {
    this.rols = rolString;
  }
  console.log(this.roln,this.rols);

  /* if(rolString === "idundefined"){

     this.redirigiradoptar();

}*/
  }


  redirigiradoptar() {
    this.router.navigate(['/login']);
  }

}
