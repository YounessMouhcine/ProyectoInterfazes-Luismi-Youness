import { RouterModule, Routes } from '@angular/router';
import { MonitorsComponent } from '../app/monitors/monitors.component';
import { ActivitiesComponent } from '../app/activities/activities.component';

export const routes: Routes = [
  { path: 'monitors', component: MonitorsComponent },   // Ruta para monitores
  { path: 'activities', component: ActivitiesComponent }, // Ruta para actividades
  { path: '', redirectTo: '/activities', pathMatch: 'full' } // Redirección inicial
];

export const AppRoutes = RouterModule.forRoot(routes);
