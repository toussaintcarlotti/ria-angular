import { Component } from '@angular/core';
import axios from "../../../api/axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.scss']
})
export class CreateEnseignantComponent {
  enseignant = {
    user: {
      nom: '',
      prenom: '',
      mail_univ: '',
      tel: '',
      email: '',
      password: '',
      status: '',
      role_id: ''
    },
    responsabilite_enseignant: ''
  };
  roles: any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    axios.get(`/api/enseignants/creer`).then((response) => {
      this.roles = response.data;
    }).catch((error) => {
      console.log(error);
    });
  }
  onSubmit() {
    let enseignant = {
      nom: this.enseignant.user.nom,
      prenom: this.enseignant.user.prenom,
      mail_univ: this.enseignant.user.mail_univ,
      tel: this.enseignant.user.tel,
      email: this.enseignant.user.email,
      password: this.enseignant.user.password ?? '',
      status: this.enseignant.user.status,
      responsabilite_enseignant: this.enseignant.responsabilite_enseignant,
      role_id: this.enseignant.user.role_id,
    }
    axios.post(`/api/enseignants`, enseignant).then((response) => {
      // push to index student
      this.router.navigate(['/enseignants']);
    }).catch((error) => {
      console.log(error);
    });
  }
}
