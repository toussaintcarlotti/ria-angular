import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import axios from "../../api/axios";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: any = new FormControl();
  alert = {
    type: '',
    title: '',
    message: '',
  }

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user') || '');
    this.user.password = null;
  }

  updateProfile() {
    axios.put('api/profile/' + this.user.id, this.user).then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      this.user = res.data;
      this.user.password = null;

      //alert
      this.alert.type = 'success';
      this.alert.title = 'Succès !';
      this.alert.message = 'Profile mis à jour avec succès !';
    }).catch((err) => {
      console.log(err);
      this.alert.type = 'danger';
      this.alert.title = 'Erreur';
      this.alert.message = 'Une erreur est survenue !';
    });
  }

  resetAlert() {
    this.alert.type = '';
    this.alert.title = '';
    this.alert.message = '';
  }
}
