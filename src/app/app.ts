import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { Skills } from './skills/skills';
import { Contacto } from './contacto/contacto';
import { Experiencia } from './experiencia/experiencia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Menu, SobreMi, Proyectos, Skills, Contacto, Experiencia, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
  phone: boolean = false;

  constructor() {}

  turn() {
    this.phone = !this.phone;
  }
}
