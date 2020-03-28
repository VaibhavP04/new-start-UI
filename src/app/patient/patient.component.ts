import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  showDateField = false;

  constructor() { }

  ngOnInit(): void {
  }

  showStartDate(event) {
    if(event === 'Disease' || event === 'Indication' || event === 'Reactions/Events') {
      this.showDateField = true;
    } else {
      this.showDateField = false;
    }
  }

}
