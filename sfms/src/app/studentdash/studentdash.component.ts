import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import {StudentDashModele} from './studentdash.model'
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-studentdash',
  templateUrl: './studentdash.component.html',
  styleUrls: ['./studentdash.component.css']
})
export class StudentdashComponent implements OnInit {
  formValue !: FormGroup;
  studentModelOnj: StudentDashModele =new StudentDashModele();  
  properityValue = "serial";
  valuefromchildcomponent:any;
  arrayList = [1, 2, 3, 4];
  studentAll:any;
  filterarray:any;
  changeAddButton: string = "Add +";
  studentIdToBeupdate: any;
  firstnamedisplay:boolean = false;
  lastnamedisplay:boolean = false;
  mobiledisplay: boolean = false;
  ascending: boolean = true;
  desc:any = "desc";
  firstnamesort:any = "desc";
  lastnamesort:any = "desc";
  mobilesort:any = "desc";
  deleteStudentData: any;
  postStudentError: any;
  editStudentDetail: any;

  constructor(
    private formBuilder :FormBuilder,
    private api:ApiService,
    private router: Router    
    ) { }
 
  ngOnInit(): void {
   this.formValue = this.formBuilder.group({
     firstName:[''],
     lastName:[''],
     email:[''],
     mobile:[''],
     fees:[''],

    })
    this.getAllStudents()

  }
postStudentDetails(){
  this.studentModelOnj.firstName= this.formValue.value.firstName;
  this.studentModelOnj.lastName= this.formValue.value.lastName;
  this.studentModelOnj.email= this.formValue.value.email;
  this.studentModelOnj.mobile= this.formValue.value.mobile;
  this.studentModelOnj.fees= this.formValue.value.fees;
  console.log("student details", this.studentModelOnj);
  if(this.changeAddButton == "Add +"){
    this.api.postStudent(this.studentModelOnj).subscribe(res=>{
      console.log(res);
    
      // alert("Student Record Added Succsesfully !");
      Swal.fire({
        title: 'Student Record Added Succsesfully !',
        text: "Student Record Added Succsesfully !",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      })      
      this.formValue.reset();
      this.filterarray = res.reverse();
    },
     err=>{
       this.postStudentError = err;
       alert("something went Wrong !!!")
     
    })
  }else{
    console.log("post student else part");
    this.api.updateStudent(Number(this.studentIdToBeupdate),this.studentModelOnj).subscribe(res=>{
      console.log(res);
      this.editStudentDetail = res;
      // alert("Student Record updated Succsesfully !");
      Swal.fire({
        title: 'Student Record Updated Succsesfully !',
        text: "Student Record updated Succsesfully !",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      })    
    },
     err=>{
       this.postStudentError = err;
       alert("something went Wrong !!!")
     
    });
  }
  
}
 

getAllStudents(){
   this.api.getStudent().subscribe((res:any)=>{
    this.studentAll = res.reverse();
    // here add the studentAll to filterarray - values copied to filterarray [...x] - x is array
    this.filterarray = [...this.studentAll];
  })
}

deleteStudents(data:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.api.deletStudent(data.id).subscribe(res=>{
        // alert("Records Deleted Successfull!"); 
        // this.deleteStudentData = res;   
        this.getAllStudents();
      });
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
 
}

onEdit(data:any){
  this.changeAddButton = "Update";
  this.studentIdToBeupdate = data.id;
  console.log("student id to be updated", this.studentIdToBeupdate);
  this.formValue.controls['firstName'].setValue(data.firstName);
  this.formValue.controls['lastName'].setValue(data.lastName); 
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['fees'].setValue(data.fees);  
}
 
studentFeesDetails(data:any){
  console.log("student fees details");
  this.router.navigate(['/studentfeesdetails', { id: data.id }]);
}

signOut(){
  localStorage.removeItem('userData');
  this.router.navigate(['login']);
}

// first name filter 
firstNameFilter(firstname:any){
  console.log(firstname);
  this.filterarray = this.studentAll.filter(function(el:any) {
    return el.firstName.toLowerCase().indexOf(firstname.toLowerCase()) !== -1
  })
}

lastNameFilter(lastname:any){
  console.log(lastname);
  this.filterarray = this.studentAll.filter(function(el:any) {
    return el.lastName.toLowerCase().indexOf(lastname.toLowerCase()) !== -1
  })
}

mobileNumberFilter(mobilenumber:any){
  console.log(mobilenumber);
  this.filterarray = this.studentAll.filter(function(el:any) {
    return el.mobile.toLowerCase().indexOf(mobilenumber.toLowerCase()) !== -1
  })
}

 getSortedData(data:any, prop:any, isAsc:any) {
   data.sort((a:any, b:any) => {
      return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1)
  });
}

sortByfirstName(){
  this.ascending = !this.ascending;
  (this.firstnamesort === "desc") ? this.firstnamesort = "asc" : this.firstnamesort = "desc";
  this.getSortedData(this.filterarray, "firstName", this.ascending);
}

sortByLastName(){
  this.ascending = !this.ascending;
  (this.lastnamesort === "desc") ? this.lastnamesort = "asc" : this.lastnamesort = "desc";
  this.getSortedData(this.filterarray, "lastName", this.ascending);
}

sortByMobile(){
  this.ascending = !this.ascending;
  (this.mobilesort === "desc") ? this.mobilesort = "asc" : this.mobilesort = "desc";
  this.getSortedData(this.filterarray, "mobile", this.ascending);
}
sortByEmail(){
  this.ascending = !this.ascending;
  (this.desc === "desc") ? this.desc = "asc" : this.desc = "desc";
  this.getSortedData(this.filterarray, "email", this.ascending);
}

}




