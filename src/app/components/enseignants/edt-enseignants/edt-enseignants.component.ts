import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import axios from "../../../api/axios";

@Component({
  selector: 'app-edt-enseignants',
  templateUrl: './edt-enseignants.component.html',
  styleUrls: ['./edt-enseignants.component.scss']
})
export class EdtEnseignantsComponent {
  enseignant?: string | null;
  edts: any = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.enseignant = params.get('enseignant');
      axios.get(`api/enseignants/${this.enseignant}/emploi-du-temps`).then((response) => {
        console.log(response.data);
        this.edts = response.data;
      }).catch((error) => {
        console.log(error);
      });

    });
  }
}
