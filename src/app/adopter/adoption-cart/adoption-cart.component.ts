import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-adoption-cart',
  templateUrl: './adoption-cart.component.html',
  styleUrls: ['./adoption-cart.component.scss']
})
export class AdoptionCartComponent {
  // Lógica del componente del carrito de adopciones

  solicitudForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.solicitudForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]*')]], // Validación de número
      direccionResidencia: ['', Validators.required],
      nombreCanino: ['', Validators.required],
      raza: ['', Validators.required],
      motivosAdopcion: ['', Validators.required],
    });
  }
  enviarSolicitud() {
    // Lógica para enviar la solicitud
    // Puedes enviar los datos del formulario al servidor aquí
  }
}
