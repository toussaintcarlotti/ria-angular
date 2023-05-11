import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './components/layouts/app/app-layout.component';
import { GuestLayoutComponent } from './components/layouts/guest/guest-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from "./components/home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileComponent} from "./components/profile/profile.component";
import {EditEtudiantComponent} from "./components/etudiants/edit-etudiant/edit-etudiant.component";
import {IndexEtudiantsComponent} from "./components/etudiants/index-etudiants/index-etudiants.component";
import {CreateEtudiantComponent} from "./components/etudiants/create-etudiant/create-etudiant.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {DataTablesModule} from "angular-datatables";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppLayoutComponent,
    GuestLayoutComponent,
    ProfileComponent,
    EditEtudiantComponent,
    IndexEtudiantsComponent,
    CreateEtudiantComponent,
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
