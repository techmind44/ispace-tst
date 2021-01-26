import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageTitleModule} from '../../Layout/Components/page-title/page-title.module';
import { ReportRoutingModule } from './report-routing.module';
import { SalesComponent } from './sales/sales.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ApexchartsModule } from '../../DemoPages/Charts/apexcharts/apexcharts.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    PageTitleModule,
    NgbModule,
    NgApexchartsModule,
    FormsModule,
  ]
})
export class ReportModule { }
