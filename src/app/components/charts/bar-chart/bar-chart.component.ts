import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  data1:any; data2: any;
  @Input()
  DesiredReplacement:any;
  @Input()
  OutofPocketHealthcare:any;
  @Input()
  HomeModification:any;
  @Input()
  MedicalHomecare:any;
  @Input()
  OtherExpenses:any;
  @Input()
  recoveryValue:any;

  public barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {enabled: false},
    hover: {mode: null},
    scales : {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value) {
            return '$' + value + 'k   ';
          }
        },
        gridLines: {
          drawBorder: false,
        },
      }],
      xAxes: [{
        gridLines : {
          display : false
        },
      }]
    }
  };
  
  public barChartLabels: Label[] = ['Estimated Cost today', 'Estimated Cost in 10 years'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartColors:Array<any> = [
    { backgroundColor: ['#49DCFA','#00B5E1'] },
  ];

  public barChartData: ChartDataSets[] = [
    { data: [230, 400], barThickness: 100 },
  ];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.data1 = Math.floor((this.DesiredReplacement + this.OutofPocketHealthcare + this.HomeModification +
        this.MedicalHomecare - this.OtherExpenses) /100);
    this.data2 = Math.floor((((this.DesiredReplacement + this.OutofPocketHealthcare + this.HomeModification)* 1.2)/this.recoveryValue) /100)
    
    this.barChartData = this.barChartData.filter((x)=> {
       x.data[1]= this.data2;
      return x.data[0]= this.data1;
    })

    if(this.barChartData.length == 0) {
      this.barChartData = [
        { data: [0, 0], barThickness: 100 },
      ];
    }
  }

  ngOnInit() {
    
  }
}
 