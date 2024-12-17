import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { ResidencesComponent } from './residences/residences/residences.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection explicite vers Home
  { path: 'home', component: HomeComponent },          // Chemin explicite pour Home
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent }, // Route pour les détails
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/:residenceId', component: ApartmentsByResidenceComponent },
  { path: '**', component: NotFoundComponent }         // Gestion des routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
