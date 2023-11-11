import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  template: `
    <div style="background-color: black; color: white; padding: 150px; text-align: center; height: 100%; margin: 0;">
      <h1 style="font-size: 4em; margin-top: -20px;">No autorizado</h1>
      <p>Por favor, contacta al administrador.</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbIhipvMATuFWvZeIcHm20vlscMBl36XwUw&usqp=CAUexture-skull.jpg" alt="Imagen No Autorizado" style="max-width: 170%; height: 170%;">
    </div>
  `,
})
export class GuardianrutaComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Redirigir al login después de 5 segundos
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
