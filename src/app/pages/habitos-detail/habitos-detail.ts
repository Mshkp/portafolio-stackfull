import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; // Soluciona el error del *ngFor
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-habitos-detail',
  standalone: true,
  imports: [CommonModule, RouterLink], // Importamos CommonModule para directivas como *ngFor
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Soluciona el error de 'swiper-container'
  templateUrl: './habitos-detail.html',
  styleUrl: './habitos-detail.css'
})
export class HabitosDetailComponent implements AfterViewInit {
  // Asegúrate de que las capturas estén en la carpeta public/projects/habitos/
  images: string[] = [
    'projects/habitos/cap2.png',
    'projects/habitos/cap3.png',
    'projects/habitos/cap4.png',
    'projects/habitos/cap5.png',
    'projects/habitos/cap6.png'
  ];

  ngAfterViewInit() {
    window.scrollTo(0, 0); // Inicia la página desde arriba
  }
}