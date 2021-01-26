import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent} from './client/client.component';
import { CategoryComponent} from './category/category.component';


const routes: Routes = [
  {
    
    path: '',

    children:[
       
      {
        path:'category',
        component:CategoryComponent,
      },
      {
        path:'',
        component:ClientComponent,
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
