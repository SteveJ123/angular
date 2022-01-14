import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: any;
  passwordMaxLength: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ["",[Validators.required, Validators.pattern('[a-zA-Z ]*')]],     
      mobile: ["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ["",[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ["",[Validators.required,  Validators.minLength(8), Validators.maxLength(10), this.createPasswordStrengthValidator()]]
      
    });
  }
 

  createPasswordStrengthValidator():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
      console.log(control);
      // let passwordlength = control.value.length;
      // console.log("length", passwordlength);
      // if(passwordlength === 10){
      //   console.log("inside")
      //   this.passwordMaxLength = "max length";
      //   console.log(this.passwordMaxLength);
      // }
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


  getRegistrationDetails(event){

    event.preventDefault();
    let obj={      
      name:  this.registrationForm.get('name').value,
      mobile: this.registrationForm.get('mobile').value,
      email: this.registrationForm.get('email').value,
      password:  this.registrationForm.get('password').value            
    }
    console.log(obj, this.registrationForm.get('password'));

    let new_jsonData = obj;
    if(localStorage.getItem('registrationData') == null){
      localStorage.setItem('registrationData', JSON.stringify(new_jsonData))
      console.log(JSON.parse(localStorage.getItem('registrationData')));
    }else if(JSON.parse(localStorage.getItem('registrationData'))?.length > 1){
      let old_jsonData = JSON.parse(localStorage.getItem('registrationData'));
    // old_jsonData.push(JSON.parse(localStorage.getItem('registrationData')));
    console.log(old_jsonData);
    old_jsonData.push(new_jsonData);

    localStorage.setItem('registrationData', JSON.stringify(old_jsonData))
    }else{      

    let old_jsonData = [];
      old_jsonData.push(JSON.parse(localStorage.getItem('registrationData')));
    // old_jsonData.push(JSON.parse(localStorage.getItem('registrationData')));
    console.log(old_jsonData);
    old_jsonData.push(new_jsonData);

    localStorage.setItem('registrationData', JSON.stringify(old_jsonData))
    }    

    
    

    this.registrationForm.reset();
    alert("Registered successfully");
  }

  clearLocalStorage(){
    localStorage.clear();
  }

}
