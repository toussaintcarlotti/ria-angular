import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import axios from "../../../api/axios";

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.scss']
})
export class EditEtudiantComponent implements OnInit {
  id?: string | null;
  etudiant = {
    user: {
      nom: '',
      prenom: '',
      mail_univ: '',
      tel: '',
      email: '',
      password: '',
      status: '',
    },
    diplome_etudiant: '',
    filiere_id: '',
  };
  filieres :any = {
    id: '',
    nom: '',
  }
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      axios.get(`/api/etudiants/${this.id}/modifier`).then((response) => {
        this.etudiant = response.data.etudiant;
        console.log(response.data.etudiant);
        this.filieres = response.data.filieres;
      }).catch((error) => {
        console.log(error);
      });

    });
  }

  onSubmit() {
    let etudiant = {
      nom: this.etudiant.user.nom,
      prenom: this.etudiant.user.prenom,
      mail_univ: this.etudiant.user.mail_univ,
      tel: this.etudiant.user.tel,
      email: this.etudiant.user.email,
      password: this.etudiant.user.password ?? '',
      status: this.etudiant.user.status,
      diplome_etudiant: this.etudiant.diplome_etudiant,
      filiere_id: this.etudiant.filiere_id,
    }
    axios.put(`/api/etudiants/${this.id}`, etudiant).then((response) => {
      // push to index student
      this.router.navigate(['/etudiants']);
    }).catch((error) => {
      console.log(error);
    });
  }
}
