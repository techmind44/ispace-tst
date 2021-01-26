import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {
    
    path: '',

    children:[
      
      {
        path:'category',
        component:CategoryComponent,
      },
      {
        path:'stock',
        component:StockComponent,
      },
      {
        path:'',
        component:ProductComponent,
      }
    ]

  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
