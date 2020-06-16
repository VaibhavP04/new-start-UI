import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAdditionalComponent } from './case-additional.component';

describe('CaseAdditionalComponent', () => {
  let component: CaseAdditionalComponent;
  let fixture: ComponentFixture<CaseAdditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAdditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
