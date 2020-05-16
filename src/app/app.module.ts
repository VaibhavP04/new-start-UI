import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { GeneralComponent } from './general/general.component';
import { PersonComponent } from './person/person.component';
import { PatientComponent } from './patient/patient.component';
import { DiseaseComponent } from './disease/disease.component';
import { EventComponent } from './event/event.component';
import { CommentsComponent } from './comments/comments.component';
import { LiteratureComponent } from './literature/literature.component';
import { LabDataComponent } from './labData/lab-data.component';
import { ProductComponent } from './product/product.component';
import { FullDataEntryComponent } from './full-data-entry/full-data-entry.component';
import { AffiliateReportingComponent } from './affiliate-reporting/affiliate-reporting.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GeneralComponent,
    PersonComponent,
    PatientComponent,
    DiseaseComponent,
    EventComponent,
    CommentsComponent,
    LiteratureComponent,
    LabDataComponent,
    ProductComponent,
    FullDataEntryComponent,
    AffiliateReportingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
