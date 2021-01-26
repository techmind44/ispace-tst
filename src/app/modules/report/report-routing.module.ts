import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';



const routes: Routes = [
  {
    
    path: '',

    children:[
      
     
      {
        path:'sales',
        component:SalesComponent,
      },
      {
        path:'',
        redirectTo:'sales',
        pathMatch:'full',
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
