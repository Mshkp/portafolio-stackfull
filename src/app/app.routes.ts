import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home'; 
import { TalenthubDetail } from './pages/talenthub-detail/talenthub-detail';
import { ClinicaDetail } from './pages/clinica-detail/clinica-detail';
import { HabitosDetailComponent } from './pages/habitos-detail/habitos-detail';
import { Contacto } from './pages/contacto/contacto';
import { SobreMi } from './pages/sobre-mi/sobre-mi';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'proyecto/talenthub', component: TalenthubDetail },
  { path: 'proyecto/clinica', component: ClinicaDetail },
  {path : 'proyecto/habitos', component: HabitosDetailComponent },
  { path: 'contacto', component: Contacto },
  {path: 'sobre-mi', component: SobreMi }
];