import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  // Estos datos los sacas de tu cuenta de EmailJS
  private readonly SERVICE_ID = 'service_00e8xul';
  private readonly TEMPLATE_ID = 'template_rtas4kh';
  private readonly PUBLIC_KEY = '2NUmxUEL8NXMg_auo';

  sendEmail(e: Event) {
    e.preventDefault();

    // Podemos añadir un estado de "Cargando..." aquí
    emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.PUBLIC_KEY)
      .then(() => {
        alert('¡Mensaje enviado! Te responderé pronto.');
        (e.target as HTMLFormElement).reset();
      }, (error) => {
        console.error('FAILED...', error.text);
        alert('Ups! Algo falló. Inténtalo de nuevo.');
      });
  }
}
