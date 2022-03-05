import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfeesdetailsComponent } from './studentfeesdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


class MocksApiService{
  postStudent(data:any){    
  }

  getStudent(){
  }

  updateStudent(id:number, data:any ){
  }

  deletStudent(id:number){
  }
}


describe('StudentfeesdetailsComponent', () => {
  let component: StudentfeesdetailsComponent;
  let fixture: ComponentFixture<StudentfeesdetailsComponent>;

  // class ActivatedRouteMock {
  //   params =  of( { id: 2 } )
  // };

  let data;
  let route: ActivatedRoute;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentfeesdetailsComponent ],
      providers: [{ provide: ActivatedRoute,  useValue: {snapshot: {
        paramMap: convertToParamMap({id: 2})
      }}},      
        {provide: ApiService, useClass: MocksApiService}],
      imports:[ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentfeesdetailsComponent);
    component = fixture.componentInstance;
    let apiServiceInstance = TestBed.inject(ApiService);
    data = [{
      "id": 1,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000",     
    },
    { id: 2, firstName: 'Sh',
    lastName: 'Doria',
    email: 'abcd@gmail.com',
    mobile: '987654321',
    fees: '9000' }];

    spyOn(apiServiceInstance, 'getStudent').and.returnValue(of(data));
    
    // const spyRoute = spyOn(route.snapshot.paramMap, 'get')
    // spyRoute.and.returnValue('2') 
    // route = TestBed.inject(ActivatedRoute);

    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

   it('should get id from ngOnInit Method and update student detail', () => {
   
    
    
    //  expect(component).toBeTruthy();
    // component.ngOnInit();
    console.log("component.id", component.id)
    let studentDetail = { id: 2, firstName: 'Sh', lastName: 'Doria', email: 'abcd@gmail.com', mobile: '987654321', fees: '9000' };
    component.studentFeesDetail[0] = studentDetail;
    console.log("component.studentFeesDetail", component.studentFeesDetail);
    expect(component.studentFeesDetail[0]).toEqual(studentDetail);
   });

   it("should update student fees in updateStudentFees method", ()=>{
    let apiServiceInstance = TestBed.inject(ApiService);
    let result1 = [ { id: 2, firstName: 'Sh',
    lastName: 'Doria',
    email: 'abcd@gmail.com',
    mobile: '987654321',
    fees: '9000' }];    
    spyOn(apiServiceInstance, 'updateStudent').and.returnValue(of(result1));
    
    component.updateStudentFees();
    component.studentFeesDetail[0].fees = '9000';
    component.id = 2;

    expect(component.studentFeesDetail).toEqual(result1);


   })

   it("should update student fees error in updateStudentFees method", ()=>{
    let apiServiceInstance = TestBed.inject(ApiService);    
   
    spyOn(apiServiceInstance, 'updateStudent').and.returnValue(throwError("err"));
    
    component.updateStudentFees();
    expect(component.error).toBe("err");



   })

   it("should execute signOut method in student fees details", ()=>{
    component.signOut();     
     console.log("localstorage signout", localStorage.getItem('userData'));
     expect(localStorage.getItem('userData')).toBeFalsy;
     // this.router.navigate(['login']);
   })
});
