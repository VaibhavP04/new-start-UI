import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-affiliate-reporting',
  templateUrl: './affiliate-reporting.component.html',
  styleUrls: ['./affiliate-reporting.component.scss']
})
export class AffiliateReportingComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit(): void {
  }

}
