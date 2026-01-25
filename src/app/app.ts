import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'stack-full';
  scrollToProjects() {
    const element = document.getElementById('proyectos-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/proyecto/talenthub']);
  }
}



