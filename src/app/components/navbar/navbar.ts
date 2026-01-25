import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // <-- Asegúrate de que estén AQUÍ
  templateUrl: './navbar.html'
})
export class Navbar { }