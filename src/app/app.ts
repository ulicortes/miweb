import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./menu/menu";
import { SobreMi } from "./sobre-mi/sobre-mi";
import { Proyectos } from "./proyectos/proyectos";
import { Skills } from "./skills/skills";
import { Contacto } from "./contacto/contacto";

@Component({
  selector: 'app-root',
  imports: [Menu, SobreMi, Proyectos, Skills, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
