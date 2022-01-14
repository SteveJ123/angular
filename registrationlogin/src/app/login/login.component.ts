import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ["",[Validators.required]],          
      password: ["",[Validators.required,  Validators.minLength(8), this.createPasswordStrengthValidator()]]
      
    });
  }

  createPasswordStrengthValidator():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
      console.log(control.value);
      const value = control.value;

      if (!value) {
          return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const hasSpecialCharacter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacter;

      console.log(!passwordValid ? {passwordStrength:true}: null);

      return !passwordValid ? {passwordStrength:true}: null;
  }
    //  return null; 
    
  }

  loginSubmit(event){
    event.preventDefault();

    let obj={      
      name:  this.loginForm.get('name').value,      
      password:  this.loginForm.get('password').value            
    }
    console.log(obj);

    let username = obj.name;
    let password = obj.password;
    let valid;
    
    let userDetail = JSON.parse(localStorage.getItem('registrationData'));
    console.log(userDetail);
    for (let i=0; i <userDetail.length; i++) {
      if ((username == userDetail[i].name) && (password == userDetail[i].password)) {
          valid = true;
          break;  
      }
  }
  console.log(valid);
  if(valid){
    alert("logged in successfully");
    this.loginForm.reset();
    this.router.navigate(['/userlist'])
  }else{
    alert("username or password is wrong");
  }
  }

}
