import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import axios from "../../../api/axios";

@Component({
  selector: 'app-edt',
  templateUrl: './edt-etudiant.component.html',
  styleUrls: ['./edt-etudiant.component.scss']
})
export class EdtEtudiantComponent {
  filiere?: string | null;
  edts: any = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.filiere = params.get('filiere');
      axios.get(`api/etudiants/${this.filiere}/emploi-du-temps`).then((response) => {
        console.log(response.data);

        this.edts = response.data;
      }).catch((error) => {
        console.log(error);
      });

    });
  }
}
