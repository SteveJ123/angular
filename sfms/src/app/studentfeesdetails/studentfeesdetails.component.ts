import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import myData from '../../../db.json';
import { ApiService } from '../shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-studentfeesdetails',
  templateUrl: './studentfeesdetails.component.html',
  styleUrls: ['./studentfeesdetails.component.css']
})
export class StudentfeesdetailsComponent implements OnInit {
  id: any;
  studentFeesDetail: any = [];
  formFees: any;
  error: any;

  constructor(private formBuilder :FormBuilder, private api:ApiService, private _Activatedroute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log("id", this.id);
    console.log("mydata", myData.posts);
    for(let i=0; i<myData.posts.length; i++){
      if(myData.posts[i].id == this.id){
        this.studentFeesDetail.push(myData.posts[i])
      }      
    }
    console.log(this.studentFeesDetail);

    this.formFees = this.formBuilder.group({
      // firstName:[''],
      // lastName:[''],
      // email:[''],
      // mobile:[''],
      fees:[''],
  
     })
  }

  updateStudentFees(){
    console.log(this.formFees.value.fees);
    this.studentFeesDetail[0].fees = Number(this.studentFeesDetail[0].fees) + Number(this.formFees.value.fees);
    this.api.updateStudent(Number(this.id),this.studentFeesDetail[0]).subscribe(res=>{
      console.log(res);
      Swal.fire({
        title: 'Student Fees Added Succsesfully !',
        text: "Student Fees Added Succsesfully !",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      })     
    },
     err=>{
       console.log("err", err);
       this.error = err;
       alert("something went Wrong !!!")
     
    });
  }

  signOut(){
    localStorage.removeItem('userData');
    this.router.navigate(['login']);
  }
}
