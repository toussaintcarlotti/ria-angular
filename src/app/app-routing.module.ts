import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./services/auth-guard.service";
import {AppLayoutComponent} from "./components/layouts/app/app-layout.component";
import {HomeComponent} from "./components/home/home.component";
import {GuestLayoutComponent} from "./components/layouts/guest/guest-layout.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {IndexEtudiantsComponent} from "./components/etudiants/index-etudiants/index-etudiants.component";
import {CreateEtudiantComponent} from "./components/etudiants/create-etudiant/create-etudiant.component";
import {EditEtudiantComponent} from "./components/etudiants/edit-etudiant/edit-etudiant.component";

const routes: Routes = [
  // app layout (authenticated)
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'etudiants', component: IndexEtudiantsComponent},
      {path: 'etudiants/ajouter', component: CreateEtudiantComponent},
      {path: 'etudiant/modifier/:id', component: EditEtudiantComponent},
    ],
    canActivate: [AuthGuard],
  },

  // guest layout
  {
    path: '',
    component: GuestLayoutComponent,
    children: [{path: 'login', component: LoginComponent}],
  },

  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
