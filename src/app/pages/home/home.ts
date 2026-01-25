import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  scrollToProjects() {
    const element = document.getElementById('proyectos-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}