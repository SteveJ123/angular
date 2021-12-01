import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  userForm: any;  

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.userForm = this.formBuilder.group({
      name: ["",[Validators.required]],     
      phone: ["",[Validators.required]],
      email: ["",[Validators.required]],
      password:["", [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        pincode: ['', Validators.required]        
    }),
    hobbies: this.formBuilder.array([
      this.formBuilder.control("")
    ])  
  
  });
  }

  get hobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobbies(){
    this.hobbies.push(this.formBuilder.control(""));    
  }
  
  removeHobby(i){
    this.hobbies.removeAt(i);
  }
  
  getUserDetail(event){
    event.preventDefault();
    console.log(this.userForm.value);
  }
}
