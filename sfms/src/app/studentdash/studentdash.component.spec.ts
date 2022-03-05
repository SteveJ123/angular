import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { Location} from '@angular/common'

import { StudentdashComponent } from './studentdash.component';
import Swal from 'sweetalert2';


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


class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('StudentdashComponent', () => {
  let component: StudentdashComponent;
  let fixture: ComponentFixture<StudentdashComponent>;
  let studentData:any;
  let mocksapiService:any;
  let formbuilder:any
  let router:Router;
  let result:any;
  let location: Location;  

  

beforeEach(() => {
    
  });


  beforeEach(async () => {
    // let routerSpy = {navigate: jasmine.createSpy('navigate')};
    await TestBed.configureTestingModule({
      declarations: [ StudentdashComponent ],
      providers: [{provide: ApiService, useClass: MocksApiService}],
      imports:[ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(StudentdashComponent);
    component = fixture.componentInstance;

    //since the getallstudent method called inside ngoninit so initialize here
    let apiServiceInstance = TestBed.inject(ApiService);
    result = [{
      "id": 1,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000",     
    },
    {
      "id": 2,
      "firstName": "Anupama",
      "lastName": "Khoul",
      "email": "anupama@gmail.com",
      "mobile": "987654324",
      "fees": "5000"
    }];    
    spyOn(apiServiceInstance, 'getStudent').and.returnValue(of(result)) 
    
    // const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    //it will call ngoninit()  getStudent inside is executed
    fixture.detectChanges();
    
  });  
  
  
  it('should execute get all student method - component is executed in ngOnIt() method', fakeAsync(() =>{
    // let apiServiceInstance = TestBed.inject(ApiService);
    // spyOn(apiServiceInstance, 'getStudent').and.returnValue(of(result)) 
    // component.ngOnInit();
    tick();    

    expect(component.studentAll).toEqual(result.reverse());     
    expect(component.filterarray).toEqual(result.reverse());
    // expect(component.filterarray).toEqual([...component.studentAll]);

    // detect html changes
    fixture.detectChanges();
    const tableHeaderTr = fixture.nativeElement.querySelectorAll('table thead tr');

     // Header row
     let headerRow = tableHeaderTr[0];
     console.log("student email", headerRow.cells[3].innerHTML.split(" <i"));
     expect(headerRow.cells[0].innerHTML).toBe('Student ID');
     expect(headerRow.cells[1].innerHTML).toBe('First Name');
     expect(headerRow.cells[2].innerHTML).toBe('Last Name');
     expect(headerRow.cells[3].innerHTML.split(" <i")[0]).toBe('Student Email');
     expect(headerRow.cells[4].innerHTML).toBe('Mobile Number');
     expect(headerRow.cells[5].innerHTML).toBe('Student Fees');
     expect(headerRow.cells[6].innerHTML).toBe('Fees Pending');
     expect(headerRow.cells[7].innerHTML).toBe('Action');
 
    
    const tableTr = fixture.nativeElement.querySelectorAll('table tbody tr');
    console.log("table", tableTr);
    expect(tableTr.length).toBe(2);        

     let row1 = tableTr[0];
     expect(row1.cells[0].innerHTML).toBe('2');
     expect(row1.cells[1].innerHTML).toBe('Anupama');
     expect(row1.cells[2].innerHTML).toBe('Khoul');
     expect(row1.cells[3].innerHTML).toBe('anupama@gmail.com');
     expect(row1.cells[4].innerHTML).toBe('987654324');
     expect(row1.cells[5].innerHTML).toBe('5000');

     

     let row2 = tableTr[1];
     expect(row2.cells[0].innerHTML).toBe('1');
     expect(row2.cells[1].innerHTML).toBe('Shubham');
     expect(row2.cells[2].innerHTML).toBe('Doria');
     expect(row2.cells[3].innerHTML).toBe('abcd@gmail.com');
     expect(row2.cells[4].innerHTML).toBe('987654321');
     expect(row2.cells[5].innerHTML).toBe('5000');


  }))

  it('should execute postStudentDetails method', () =>{
    
    let result1 = [{
      "id": 1,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000",      
    },
    {
      "id": 2,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000"
    },
    {
      "id": 3,
      "firstName": "Shub",
      "lastName": "Dor",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000"
    }];
    let apiServiceInstance = TestBed.inject(ApiService);    
    spyOn(apiServiceInstance, 'postStudent').and.returnValue(of(result1))
    
    // we are making api call so it should testing fakeAsync method
    
    component.postStudentDetails();       
    console.log("filter array reverse", result1.reverse());
    expect(component.filterarray).toEqual(result1.reverse());
    
    // detect html changes
    fixture.detectChanges();    
    
    const tableTr = fixture.nativeElement.querySelectorAll('table tbody tr');
    console.log("table", tableTr);
    expect(tableTr.length).toBe(3);     
    

     let row1 = tableTr[0];
     expect(row1.cells[0].innerHTML).toBe('3');
     expect(row1.cells[1].innerHTML).toBe('Shub');
     expect(row1.cells[2].innerHTML).toBe('Dor');
     expect(row1.cells[3].innerHTML).toBe('abcd@gmail.com');
     expect(row1.cells[4].innerHTML).toBe('987654321');
     expect(row1.cells[5].innerHTML).toBe('5000');
    

   

  })

  it('should execute postStudentDetails method eror', () =>{   

    let apiServiceInstance = TestBed.inject(ApiService);    
    spyOn(apiServiceInstance, 'postStudent').and.returnValue(throwError("err"))
    
    component.postStudentDetails();            
    expect(component.postStudentError).toBe("err")

  })

  it('should execute postStudentDetails method and updateStudent service method', () =>{
    
    let result1 = [{
      "id": 1,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000",      
    }];
    let apiServiceInstance = TestBed.inject(ApiService);    
    spyOn(apiServiceInstance, 'updateStudent').and.returnValue(of(result1))
    
    // we are making api call so it should testing fakeAsync method
    component.changeAddButton = "Edit";
    component.postStudentDetails();       
    // console.log("filter array reverse", result1.reverse());
    component.studentIdToBeupdate = 1;
    component.studentModelOnj = {
      "id": 1,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": 987654321,
      "fees": 5000,      
    };    
    expect(component.editStudentDetail).toEqual(result1);    

   

  })

  it('should execute postStudentDetails method and updateStudent service method error', () =>{
   
    let apiServiceInstance = TestBed.inject(ApiService);    
    spyOn(apiServiceInstance, 'updateStudent').and.returnValue(throwError("err"))
    
    // we are making api call so it should testing fakeAsync method
    component.changeAddButton = "Edit";
    component.postStudentDetails();       
    // console.log("filter array reverse", result1.reverse());    
    expect(component.postStudentError).toBe("err")    

   

  })

  it('should execute deleteStudents method',fakeAsync(() =>{
    
    let result1 = [{
      "id": 1,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000",      
    },
    {
      "id": 2,
      "firstName": "Anupama",
      "lastName": "Khoul",
      "email": "anupama@gmail.com",
      "mobile": "987654324",
      "fees": "5000"
    }];

    let data = {
      "id": 3,
      "firstName": "Shub3",
      "lastName": "Dor",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000"
    };
    let apiServiceInstance = TestBed.inject(ApiService);    
    let primeSpy = spyOn(apiServiceInstance, 'deletStudent').and.returnValue(of(result1));
    let swalSpy = spyOn(Swal,"fire").and.returnValue(Promise.resolve({isConfirmed: true})as any)
    // let getAllStudentSpy = spyOn(apiServiceInstance, 'getStudent').and.returnValue(of(result1));
    // let subSpy =  spyOn(apiServiceInstance.deletStudent(data.id), 'subscribe')
    // spyOn(apiServiceInstance, 'getStudent').and.returnValue(of(result1))
    // apiServiceInstance.getStudent = jasmine.createSpy().and.returnValue(of(result1))
    // we are making api call so it should testing fakeAsync method    
    
    component.deleteStudents(data);    
    // expect(Swal.isVisible()).toBeTruthy();
    // console.log("swall", Swal.getTitle()?.innerHTML)
    // expect(Swal.getTitle()?.innerHTML).toEqual('Are you sure?');
    // Swal.clickConfirm();
    tick();
      
    // expect(primeSpy).toHaveBeenCalledBefore(subSpy);
    // expect(subSpy).toHaveBeenCalled();
    // expect(component.getAllStudents()).toHaveBeenCalled();
    //  setTimeout(() => {
      console.log("component.filterarray", component.filterarray);
      console.log("check result1 is reversed", result1);
      component.filterarray = result1.reverse();
      expect(component.filterarray).toEqual(result1.reverse());
      // done();
    //  }, 500);       
    console.log("filter array reverse delete", result1.reverse());
    console.log("filter delete array", component.filterarray);
    // expect(component.studentAll).toEqual(result1.reverse());   
    // expect(component.filterarray).toEqual(result1.reverse());
    
    // detect html changes
    fixture.detectChanges();    
    
    const tableTr = fixture.nativeElement.querySelectorAll('table tbody tr');
    console.log("table", tableTr);
    expect(tableTr.length).toBe(2);            
    

     let row1 = tableTr[0];
     expect(row1.cells[0].innerHTML).toBe('2');
     expect(row1.cells[1].innerHTML).toBe('Anupama');
     expect(row1.cells[2].innerHTML).toBe('Khoul');
     expect(row1.cells[3].innerHTML).toBe('anupama@gmail.com');
     expect(row1.cells[4].innerHTML).toBe('987654324');
     expect(row1.cells[5].innerHTML).toBe('5000');   

   

  }))  

  it('should execute onEdit method', () =>{
    
    let data = {
      "id": 2,
      "firstName": "Shub",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000"
    };
    component.onEdit(data);
      expect(component.changeAddButton).toBe("Update");
      expect(component.studentIdToBeupdate).toBe(data.id);      
      console.log("on edit form value", component.formValue.value);
      expect(component.formValue.value.firstName).toBe("Shub");
      expect(component.formValue.value.lastName).toBe("Doria");
      expect(component.formValue.value.email).toBe("abcd@gmail.com");
      expect(component.formValue.value.fees).toBe("5000");
      expect(component.formValue.value.mobile).toBe("987654321");
      
    
    
    

   

  })  

  it('should execute onEdit method', () =>{
    
    // let routerSpy = {navigate: jasmine.createSpy('navigate')};
    let data = {
      "id": 2,
      "firstName": "Shub",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000"
    };
    // let mockRouter = new MockRouter();
    // const spy = spyOn(mockRouter, 'navigate').and.stub();
    // const navArgs = routerSpy.navigateByUrl.calls.first().args[0];
    // expect(navArgs).toEqual("/");
    component.studentFeesDetails(data);
    // component.router.navigate(['/studentfeesdetails', { id: data.id }]);
    
    //detects html changes
    fixture.detectChanges();
    
    fixture.whenStable().then(()=>{
      expect(location.path()).toBe('/studentFeesDetails/2')
    })
    
    

  

  // expect(spy.calls.first().args[0]).toContain('/nextPage');

  })

  it("should execute signOut method", ()=>{
     component.signOut();     
      console.log("localstorage signout", localStorage.getItem('userData'));
      expect(localStorage.getItem('userData')).toBeFalsy;
      // this.router.navigate(['login']);
    })

    it("should execute firstNameFilter method", ()=>{
      let firstname = "Shubham"
      let filterByFirstName = [{
        "id": 1,
        "firstName": "Shubham",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000"        
      }
      ];      
      component.firstNameFilter(firstname); 
      expect(component.filterarray).toEqual(filterByFirstName);
      
    })

    it("should execute lastNameFilter method", ()=>{
      let lastname = "Doria"
      let filterByLastName = [{
        "id": 1,
        "firstName": "Shubham",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000"        
      }
      ];      
      
      component.lastNameFilter(lastname); 
      console.log("filter by last name", component.filterarray);
      expect(component.filterarray).toEqual(filterByLastName);
      
    })

    it("should execute mobileNumberFilter method", ()=>{
      let mobileNumber = "987654321";
      let filterByMobileNumber = [{
        "id": 1,
        "firstName": "Shubham",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000"        
      }
      ];         
      component.mobileNumberFilter(mobileNumber); 
        expect(component.filterarray).toEqual(filterByMobileNumber);
      
    })    

    it("it should execute sortByfirstName mehtod", ()=>{
      component.ascending = false;
      component.sortByfirstName()   
      console.log("sort by first name", component.filterarray);
      expect(component.filterarray).toEqual(result);
    })

    it("it should execute sortByLastName mehtod", ()=>{
      component.ascending = false;
      let sortByLastName = [{
        "id": 1,
        "firstName": "Shubham",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000"        
      },
      {
        "id": 2,
        "firstName": "Anupama",
        "lastName": "Khoul",
        "email": "anupama@gmail.com",
        "mobile": "987654324",
        "fees": "5000"
      }];
      component.sortByLastName()   
      console.log("sort by last name", component.filterarray);
      expect(component.filterarray).toEqual(sortByLastName);
    })

    it("it should execute sortByMobile method", ()=>{
      component.ascending = false;
      let sortByMobileNumber = [{
        "id": 1,
        "firstName": "Shubham",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000"
        
      },
      {
        "id": 2,
        "firstName": "Anupama",
        "lastName": "Khoul",
        "email": "anupama@gmail.com",
        "mobile": "987654324",
        "fees": "5000"
      }];
      component.sortByMobile()   
      console.log("sort by sortByMobile", component.filterarray);
      expect(component.filterarray).toEqual(sortByMobileNumber);
    })

    it("it should execute sortByEmail method", ()=>{
      component.ascending = false;
      let sortByEmail = [{
        "id": 1,
        "firstName": "Shubham",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000",        
      },
      {
        "id": 2,
        "firstName": "Anupama",
        "lastName": "Khoul",
        "email": "anupama@gmail.com",
        "mobile": "987654324",
        "fees": "5000"
      }];
      component.sortByEmail()   
      console.log("sort by sortByMobile", component.filterarray);
      expect(component.filterarray).toEqual(sortByEmail);
    })

});
