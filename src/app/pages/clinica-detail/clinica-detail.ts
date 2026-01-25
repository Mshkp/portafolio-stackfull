import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-clinica-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './clinica-detail.html',
  styleUrl: './clinica-detail.css'
})
export class ClinicaDetail implements AfterViewInit {
  // Capturas basadas en tu repositorio de Consultas Médicas [cite: 176]
  images: string[] = [
    'projects/clinica/cap2.png',
    'projects/clinica/cap3.png',
    'projects/clinica/cap4.png',
    'projects/clinica/cap5.png'
  ];

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
}