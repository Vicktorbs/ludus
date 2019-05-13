import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-user-grafic-info',
  templateUrl: './user-grafic-info.component.html',
  styleUrls: ['./user-grafic-info.component.css']
})
export class UserGraficInfoComponent implements OnInit {

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Matematicas', 'Español', 'Historia', 'Formacion C y E', 'Ciencias Naturales', 'Educacion Artistica', 'Geografia'];

  public radarChartData: ChartDataSets[] = [
    { data: [60, 0, 0, 0, 0, 0, 80], label: 'Avance' }
  ];
  public radarChartType: ChartType = 'radar';

  // Linear
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 75, 80], label: 'Puntaje' },
  ];
  public lineChartLabels: Label[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: {}
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#3498DB',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
