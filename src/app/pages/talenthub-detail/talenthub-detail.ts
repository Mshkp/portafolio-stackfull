import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-talenthub-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './talenthub-detail.html',
  styleUrl: './talenthub-detail.css'
})
export class TalenthubDetail implements AfterViewInit {
  // Las rutas a tus capturas en la carpeta public
  images: string[] = [
    'projects/talenthub/cap1.png',
    'projects/talenthub/cap2.png',
    'projects/talenthub/cap3.png'
  ];

  ngAfterViewInit() {
    // Esto asegura que la página inicie desde arriba
    window.scrollTo(0, 0);
  }
}