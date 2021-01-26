import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.sass']
})
export class SalesComponent implements OnInit {
  heading = 'Sales';
  subheading = '';
  icon = 'fa fa-line-chart';
  btnstatus = false;

  constructor() { }

  ngOnInit() {
  }

}
