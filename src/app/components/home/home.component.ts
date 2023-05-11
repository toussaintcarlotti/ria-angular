import {Component} from '@angular/core';
import * as ApexCharts from 'apexcharts';
import axios from "../../api/axios";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  totalStudent = null;

  constructor() {
  }

  async ngOnInit() {
    let studentStats = {
      data: [],
      labels: [],
      totalEtudiant: null,
    };

    var element = <HTMLElement>document.getElementById('etudiantFiliereChart');

    var colors = {
      primary: '#6571ff',
      secondary: '#7987a1',
      success: '#05a34a',
      info: '#66d1d1',
      warning: '#fbbc06',
      danger: '#ff3366',
      light: '#e9ecef',
      dark: '#060c17',
      muted: '#7987a1',
      gridBorder: 'rgba(77, 138, 240, .15)',
      bodyColor: '#000',
      cardBg: '#fff',
    };

    await axios.get('api/dashboard')
      .then(function (response) {
        studentStats = response.data;
        var options = {
          chart: {
            type: 'bar',
            height: 80,
            sparkline: {
              enabled: !0,
            },
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
              columnWidth: '60%',
            },
          },
          colors: [colors.primary],
          series: [
            {
              name: '',
              data: studentStats.data,
            },
          ],
          xaxis: {
            type: 'string',
            categories: studentStats.labels,
          },
        };

        var chart = new ApexCharts(element, options);
        chart.render();
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });

    this.totalStudent = studentStats.totalEtudiant;
  }
}
