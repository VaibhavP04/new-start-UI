import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-data',
  templateUrl: './lab-data.component.html',
  styleUrls: ['./lab-data.component.scss']
})
export class LabDataComponent implements OnInit {

  showLabDataForms = false;

  constructor() { }

  ngOnInit(): void {
  }

  addLabDataForms() {
    this.showLabDataForms = true;
  }

}
