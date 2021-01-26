import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { PageTitleModule } from '../../Layout/Components/page-title/page-title.module';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [ProductComponent, StockComponent, CategoryComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PageTitleModule,
    NgbModule
  ]
})
export class ProductModule { }
