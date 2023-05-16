import { Component } from '@angular/core';
import {Router} from "@angular/router";
import axios from "../../../api/axios";

@Component({
  selector: 'app-index-enseignants',
  templateUrl: './index-enseignants.component.html',
  styleUrls: ['./index-enseignants.component.scss']
})
export class IndexEnseignantsComponent {
  dtOptions: DataTables.Settings = {};
  enseignants: any = [];
  user: any = JSON.parse(localStorage.getItem('user') || '');

  alert = {
    type: '',
    title: '',
    message: '',
  }

  constructor(private router: Router) {
    this.getenseignants();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        search: 'Rechercher',
        lengthMenu: 'Afficher _MENU_ entrées',
        info: 'Affichage de _START_ à _END_ de _TOTAL_ entrées',
        paginate: {
          first: 'Premier',
          last: 'Dernier',
          next: 'Suivant',
          previous: 'Précédent'
        }
      }
    };
  }

  getenseignants() {
    axios.get('api/enseignants').then((res) => {
      this.enseignants = res.data;
    }).catch((err) => {
      console.log(err);
    });
  }

  deleteEnseignant(id: number) {
    axios.delete('api/enseignants/' + id).then((res) => {
      this.getenseignants();
      //alert
      this.alert.type = 'success';
      this.alert.title = 'Succès !';
      this.alert.message = 'Enseignant supprimer avec succès !';
    }).catch((err) => {
      console.log(err);

      this.alert.type = 'danger';
      this.alert.title = 'Erreur';
      this.alert.message = 'Une erreur est survenue !';
    });
  }

  editEnseignant(id: number) {
    this.router.navigate(['enseignant/modifier', id])
  }

  resetAlert() {
    this.alert.type = '';
    this.alert.title = '';
    this.alert.message = '';
  }
}
