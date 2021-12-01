import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  userForm: any;  
    modalDisplay = {fullname: "fullname"};
    closeResult = '';
    
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal){

  }

  ngOnInit(){
    this.userForm = this.formBuilder.group({
      fullname: ["",[Validators.required]],           
      address: this.formBuilder.group({
        address1: ['', Validators.required],
        address2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required]        
    }),    
  
  });
 
  }
 
  
  
  getUserDetail(event){
    event.preventDefault();
    console.log(this.userForm.value);
    this.modalDisplay = {...this.userForm.value};
    console.log("modalDisplay", this.modalDisplay.fullname)
    
  }
}
