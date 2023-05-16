import { Component } from '@angular/core';
import axios from "../../../api/axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.scss']
})
export class CreateEtudiantComponent {
  etudiant = {
    nom: '',
    prenom: '',
    mail_univ: '',
    tel: '',
    email: '',
    password: '',
    status: '',
    diplome_etudiant: '',
    filiere_id: '',
  };
  filieres :any = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    axios.get('/api/etudiants/creer').then((response) => {
      this.filieres = response.data;
    }).catch((error) => {
      console.log(error);
    });
  }

  onSubmit() {
    axios.post('/api/etudiants', this.etudiant).then((response) => {
      // push to index student
      this.router.navigate(['/etudiants']);
    });
  }
}
