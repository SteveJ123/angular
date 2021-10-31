import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  auth2: any;  

  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  
  userName;
  userEmail;
  userFormDetails;
  
  constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder,
    private http: HttpClient, private service: ServiceService) { }

  ngOnInit(): void {
    this.checkUserLogin();
    this.googleInitialize();
    this.userForm();
  }

  userForm(){
    this.userFormDetails = this.formBuilder.group({
      emailId: ["",[Validators.required]],
      password: ["",Validators.required],
      
    });
  }

  checkUserLogin(){
    if(JSON.parse(localStorage.getItem("userData")) || JSON.parse(localStorage.getItem("username")) ){
      this.router.navigate(['user'])
    }
    
  }

  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '655550997112-pv485bcglm6c3p1f83fm8b68ruj1ih9u.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        // this.zone.run(() => this.prepareLogin());
        this.prepareLogin();
        
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // this.show = true;
        // this.Name =  profile.getName();
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        console.log("profile", profile);
        this.userName = profile.Se;
        this.userEmail = profile.Yt;
        console.log("user name", this.userName);
        console.log("user email", this.userEmail);
        localStorage.setItem("userData", JSON.stringify({userName: this.userName, userEmail: this.userEmail}));
        this.zone.run(() => this.router.navigate(['user']));       


        // localStorageData(googleUser.getAuthResponse().id_token, profile.getImageUrl(), profile.getEmail());

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  getUserDetail(event){
    event.preventDefault();

    const httpOptionsPlain = {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text/plain'
      }),
      'responseType': 'text'
    };
    let obj={      
      emailId:  this.userFormDetails.get('emailId').value,
      password: this.userFormDetails.get('password').value      
    }

    console.log(obj);

    this.service.getdata().subscribe((result:any)=>{
      console.log(result);
      let filter:any = result.find(function(e, index){
          if(e.emailId === obj.emailId && e.password === obj.password){
            return e;
          }
      })
      console.log("filter", filter);

      if(filter){
        let username = filter.username;
        let emailId = filter.emailId;
        let obj = {
          userName: username,
          userEmail:  emailId
        }
        localStorage.setItem("username",JSON.stringify(obj));
        this.router.navigate(['/user']);
      }

      })
      // this.loanForm.reset();
      
    // },
    // error => {console.log(error);}
    // ) 
  
  
  }
}
