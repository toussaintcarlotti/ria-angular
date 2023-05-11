import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import axios from "../../../api/axios";

@Component({
  selector: 'app-index-etudiants',
  templateUrl: './index-etudiants.component.html',
  styleUrls: ['./index-etudiants.component.scss']
})
export class IndexEtudiantsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  etudiants: any = [];
  user: any = JSON.parse(localStorage.getItem('user') || '');

  alert = {
    type: '',
    title: '',
    message: '',
  }

  constructor(private router: Router) {
    this.getEtudiants();
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

  getEtudiants() {
    axios.get('api/etudiants').then((res) => {
      this.etudiants = res.data;
    }).catch((err) => {
      console.log(err);
    });
  }

  deleteEtudiant(id: number) {
    axios.delete('api/etudiants/' + id).then((res) => {
      this.getEtudiants();
      //alert
      this.alert.type = 'success';
      this.alert.title = 'Succès !';
      this.alert.message = 'Étudiant supprimer avec succès !';
    }).catch((err) => {
      console.log(err);

      this.alert.type = 'danger';
      this.alert.title = 'Erreur';
      this.alert.message = 'Une erreur est survenue !';
    });
  }

  editEtudiant(id: number) {
    this.router.navigate(['etudiant/modifier', id])
  }

  resetAlert() {
    this.alert.type = '';
    this.alert.title = '';
    this.alert.message = '';
  }
}
