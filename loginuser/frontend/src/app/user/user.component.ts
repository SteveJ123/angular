import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetail: any;
  constructor(private router: Router) { }

  ngOnInit(): void {    
    if(JSON.parse(localStorage.getItem("userData"))){
      this.userDetail = JSON.parse(localStorage.getItem("userData"));
    console.log(this.userDetail);
    }else{
      this.userDetail = JSON.parse(localStorage.getItem("username"));
      console.log(this.userDetail);
    }
  }

  pageReload(){
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  googleLogIn(){   
      localStorage.removeItem("userData");
      this.pageReload();  
}

  usernameLogIn(){   
      localStorage.removeItem("username");
      this.pageReload();   
  }

  redirectToHomePage(){
    if(localStorage.getItem("userData")){
    this.googleLogIn();
    }else{
      this.usernameLogIn();
    }    
  }  

  signout(){
    this.redirectToHomePage();
  }
}
