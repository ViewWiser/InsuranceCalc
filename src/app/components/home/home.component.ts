import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slider: number;
 
  DesiredReplacement:number = 7030;
  OutofPocketHealthcare:number= 11400;
  HomeModification:number = 1660;
  MedicalHomecare:number = 22000;
  OtherExpenses: number = 17440;
  recoveryValue: number = 6;
  constructor() { }

  ngOnInit(): void {

  }
  updateSetting(event: any, type:string) {
    this.slider = event.value;
    switch(type) {
      case "DesiredReplacement":
        this.DesiredReplacement = event.value;
        break;
      case "OutofPocketHealthcare":
        this.OutofPocketHealthcare = event.value;
        break;
      case "HomeModification":
        this.HomeModification = event.value;
        break;
      case "MedicalHomecare":
        this.MedicalHomecare = event.value;
        break;
      case "OtherExpenses":
        this.OtherExpenses = event.value;
        break;
    }
  }

  recoveryPeriod(event: any) {
    this.slider = event.value;
    this.recoveryValue = event.value;
  }
}

