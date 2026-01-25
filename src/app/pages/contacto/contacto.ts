import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para que no falle la plantilla

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule], // Añadimos esto aquí
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto implements AfterViewInit {

  ngAfterViewInit() {
    // Asegura que al entrar la vista inicie desde arriba
    window.scrollTo(0, 0);
  }

  // Aquí puedes añadir después la lógica para enviar el formulario
  enviarMensaje() {
    console.log('Mensaje enviado');
  }
}