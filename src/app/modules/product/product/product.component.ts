import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  heading = 'Products';
  subheading = '';
  icon = 'fa fa-archive';
  btntext = 'Product';

  products = [
    {
      id:1,
      name:"product1",
      partnumber:3214,
      category:{
        id:1,
        name:"Cat1",
      },
      hsncode:5874,
      units:"Kg",
      qtypercase:1,

    },
    {
      id:2,
      name:"product2",
      partnumber:3214,
      category:{
        id:2,
        name:"Cat2",
      },
      hsncode:5874,
      units:"Kg",
      qtypercase:1,

    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
