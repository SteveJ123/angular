import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'; 
import { EmployeeService } from './appService/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'userdetail';
  // bodyText: string;

  closeResult = '';
  empForm: any;
  employeeList: Object;
  edit: string;
  employeeId: any;

  term='';
  employeeDetails = [
    {
      "name": "Russia",
      "flag": "f/f3/Flag_of_Russia.svg",
      "area": 17075200,
      "population": 146989754
    },
    {
      "name": "France",
      "flag": "c/c3/Flag_of_France.svg",
      "area": 640679,
      "population": 64979548
    },
    {
      "name": "Germany",
      "flag": "b/ba/Flag_of_Germany.svg",
      "area": 357114,
      "population": 82114224
    },
    {
      "name": "Canada",
      "flag": "c/cf/Flag_of_Canada.svg",
      "area": 9976140,
      "population": 36624199
    },
    {
      "name": "Vietnam",
      "flag": "2/21/Flag_of_Vietnam.svg",
      "area": 331212,
      "population": 95540800
    },
    {
      "name": "Mexico",
      "flag": "f/fc/Flag_of_Mexico.svg",
      "area": 1964375,
      "population": 129163276
    },
    {
      "name": "United States",
      "flag": "a/a4/Flag_of_the_United_States.svg",
      "area": 9629091,
      "population": 324459463
    },
    {
      "name": "India",
      "flag": "4/41/Flag_of_India.svg",
      "area": 3287263,
      "population": 1324171354
    }
];

  constructor(private modalService: NgbModal,
    private empService: EmployeeService,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.getEmployeeList();
      this.empForm = this.formBuilder.group({
        name: ["",[Validators.required]],
        position: ["",Validators.required],
        dept: ["",[Validators.required]]        
        
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
        this.edit = "";
        return 'by pressing ESC';
       
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        this.edit = "";
        return 'by clicking on a backdrop';
       
      } else {
        this.edit = "";
        return `with: ${reason}`;
      }
    }

    addEmployeeDetail(event){
      event.preventDefault();     
      console.log("test", this.empForm.value, this.edit);

      if(this.edit){
        this.empService.updateEmployee(this.empForm.value, this.employeeId).subscribe(result=>{
          console.log(result);
          this.getEmployeeList();               
        })
      }else{
        this.empService.addEmployee(this.empForm.value).subscribe(result=>{
          console.log(result);
          this.getEmployeeList();          
        })
      }      
    }

    getEmployeeList(){
      this.empService.getEmployeeList().subscribe(result=>{
        console.log(result);
        this.employeeList = result;
      })
    }

    deleteEmployee(id){
      if(confirm("do you want to delete employee")){
        this.empService.deleteEmployee(id).subscribe(result=>{
          this.getEmployeeList();
        })
      }      
    }

    editEmployee(content, item){
      this.edit = "Edit";
      console.log("item", item);
      this.employeeId= item._id;
      this.empForm.patchValue(item);
      this.open(content);
    }
}
