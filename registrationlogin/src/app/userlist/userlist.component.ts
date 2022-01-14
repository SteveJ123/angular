import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userListEmail;

  constructor() { }

  ngOnInit(): void {

    let userlist = JSON.parse(localStorage.getItem('registrationData'));
    this.userListEmail = userlist;

  }

}
