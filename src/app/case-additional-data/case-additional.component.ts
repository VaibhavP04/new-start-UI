import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-additional',
  templateUrl: './case-additional.component.html',
  styleUrls: ['./case-additional.component.scss']
})
export class CaseAdditionalComponent implements OnInit {

  showField = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDocuments(event) {
    if(event.target.value === 'yes') {
      this.showField = true;
    } else {
      this.showField = false;
    }
  }

}
