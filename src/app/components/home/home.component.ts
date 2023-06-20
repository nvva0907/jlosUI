import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activities: any = [
    {
      page: 'User Management',
      icon: 'fas fa-users',
      dropdown: [
        {
          dropdownName: 'User',
          routerLink: '/user',
        },
        {
          dropdownName: 'User Role',
          routerLink: '/user-role',
        },
        {
          dropdownName: 'App Function',
          routerLink: '/app-function',
        },
      ],
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
