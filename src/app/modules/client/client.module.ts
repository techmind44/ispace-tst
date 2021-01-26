import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleModule } from '../../Layout/Components/page-title/page-title.module';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client/client.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [ClientComponent, CategoryComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    PageTitleModule,
  ]
})
export class ClientModule { }
