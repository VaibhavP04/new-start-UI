import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateReportingComponent } from './affiliate-reporting.component';

describe('AffiliateReportingComponent', () => {
  let component: AffiliateReportingComponent;
  let fixture: ComponentFixture<AffiliateReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
