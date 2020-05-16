import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDataEntryComponent } from './full-data-entry.component';

describe('FullDataEntryComponent', () => {
  let component: FullDataEntryComponent;
  let fixture: ComponentFixture<FullDataEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullDataEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
