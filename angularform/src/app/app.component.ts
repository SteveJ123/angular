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
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  
  getUserDetail(event){
    event.preventDefault();
    console.log(this.userForm.value);
    this.modalDisplay = {...this.userForm.value};
    console.log("modalDisplay", this.modalDisplay.fullname)
    
  }
}
