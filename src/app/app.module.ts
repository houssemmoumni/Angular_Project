import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { ResidencesComponent } from './residences/residences/residences.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsByResidenceComponent,
    ApartmentsComponent,
    AddApartmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
