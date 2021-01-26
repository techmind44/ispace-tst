import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TrendModule } from 'ngx-trend';

import { PageTitleModule } from '../../Layout/Components/page-title/page-title.module';
import { DynamicModule } from '../../Components/Tables/dynamic/dynamic.module';



// import { PageTitleComponent } from '../../../Layout/Components/page-title/page-title.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule, NgbModule,
    DashboardRoutingModule,
    AngularFontAwesomeModule,
    SlickCarouselModule,
    ChartsModule, NgApexchartsModule, PerfectScrollbarModule, TrendModule, PageTitleModule, DynamicModule
  ],
  declarations: [DashboardComponent],
  providers: [
    {
      provide:
        PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
        DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    }
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
