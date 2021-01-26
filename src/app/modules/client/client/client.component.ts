import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass']
})
export class ClientComponent implements OnInit {
  heading = 'Clients';
  subheading = '';
  icon = 'fa fa-users';
  btntext = 'Client';

    clients = [
      {
        id:1,
        orgname:"neemiit",
        orgphone:999999999,
        orgemail:"info@neemiit.com",
        name:"ranveer",
        phone:888888888,
        email:"ranveer@neemiit.com",
        gst:"36etfuefy123tr",
        address:"Demo Address",
        location:"17.12345,76.21354",
        assignedto:{
          id:1,
          name:"Abhinay",
        },
        incorporated:"12/11/2019",


      },
      {
        id:2,
        orgname:"Google",
        orgphone:7777777777,
        orgemail:"info@google.com",
        name:"Sundhar Pichaya",
        phone:888888888,
        email:"Sundhar@google.com",
        gst:"36etsdf123tr",
        address:"google Address",
        location:"17.15452,76.12454",
        assignedto:{
          id:1,
          name:"Abhinay",
        },
        incorporated:"12/11/2010",


      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
