import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModele } from './login.model';
import myData from '../../../db.json';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  loginFormDetails: any;
  user: { id: number; email: string; password: string; } | undefined;

  constructor(private formBuilder : FormBuilder, private http : HttpClient,private router: Router ) {}

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      password:['',[Validators.required]]

    })

    console.log("myData",  this.loginForm);
  }

  
  login(){
    //getting information from loginform

    this.loginFormDetails = {...this.loginForm.value};
    console.log("any value entered in input field", this.loginForm.valid)

    // user is valid or not to login
     this.user = myData.login.find((x:any) => x.email === this.loginFormDetails.email  && x.password ===  this.loginFormDetails.password);

    //if true - there is a match
    if(this.user){
      console.log("email password matched");
      localStorage.setItem('userData', myData.login[0].email);      
      this.router.navigate(['/studentdash']);     
    }else{
      console.log("incorrect email or password");
      console.log("this.loginForm.valid incorrect  credential", this.loginForm.valid)
      alert("incorrect email or password")
    }


{
}

}
}
