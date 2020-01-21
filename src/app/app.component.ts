import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  date = new FormControl({disabled: true, value: new Date()});
  caseNo = new FormControl('', [Validators.required]);
  safetyReport = new FormControl();
  patientId = new FormControl('', [Validators.required]);
  maxDate = new Date();
  drugName = new FormControl('', [Validators.required, Validators.maxLength(255)]);
  reaction = new FormControl('', [Validators.required]);
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  reports = ['Patient', 'Physician'];
  sources = ['Clinical Study', 'Spontaneous', 'Literature']


  ngOnInit() {
    this.filteredOptions = this.reaction.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
