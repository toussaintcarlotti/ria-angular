import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import axios from "../../../api/axios";

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.scss']
})
export class EditEnseignantComponent {
  id?: string | null;
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      axios.get(`/api/enseignants/${this.id}/modifier`).then((response) => {
        console.log(response.data);

        this.enseignant = response.data.enseignant;
        this.roles = response.data.roles;
      }).catch((error) => {
        console.log(error);
      });

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
    axios.put(`/api/enseignants/${this.id}`, enseignant).then((response) => {
      // push to index student
      this.router.navigate(['/enseignants']);
    }).catch((error) => {
      console.log(error);
    });
  }
}
