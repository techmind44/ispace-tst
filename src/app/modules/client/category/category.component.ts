import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  heading = 'Category';
  subheading = '';
  icon = 'fa fa-archive';
  btntext = 'Category';

  categories = [
    {
      id:1,
      name:"Basic",
    },
    {
      id:2,
      name:"General",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
