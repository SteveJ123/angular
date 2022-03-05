import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [{ provide: Router, useValue: routerSpy }],
      imports:[ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });
  
  // 1. set  this.loginForm email and password with value and wrong value
  // 2. form validation
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('Form should be invalid when no values entered', ()=> {
  //   component.loginForm.controls['email'].setValue('');
  //   component.loginForm.controls['password'].setValue('');     
    
  //   expect(component.loginForm.valid).toBeFalsy();    
  // });

  // it('Form should be invalid when invalid email is entered', ()=>{
  //   component.loginForm.controls['email'].setValue('admin');
  //   component.loginForm.controls['password'].setValue('admin');   
  //   expect(component.loginForm.valid).toBeFalsy();    
  // })

  // it('Form should be valid when valid email field and password field is entered', ()=>{
  //   component.loginForm.controls['email'].setValue('admin@gmail.com');
  //   component.loginForm.controls['password'].setValue('admin');   
  //   expect(component.loginForm.valid).toBeTruthy();
  // })

  // it('Form should be valid when correct credential is entered', ()=> {
  //   component.loginForm.controls['email'].setValue('admin@gmail.com');
  //   component.loginForm.controls['password'].setValue('admine@2021');   
  //   expect(component.loginForm.valid).toBeTruthy();
  // });

  // it('Form should be valid when incorrect password credential entered', ()=> {
  //   component.loginForm.controls['email'].setValue('admin@gmail.com');
  //   component.loginForm.controls['password'].setValue('admine@20');   
  //   expect(component.loginForm.valid).toBeTruthy();
  // });

  // login button clicked

  // this.loginFormDetails = {...this.loginForm.value};
  // this.user
  // localStorage.setItem('userData', myData.login[0].email);      
  // this.router.navigate(['/studentdash']);

  it('should set submitted to false when no values entered', () => {
    component.login();         
    expect(component.loginFormDetails).toEqual(component.loginForm.value);    
    expect(component.user).toBeFalsy;
  });

  it('should set submitted to true when correct credentials entered', () => {
    component.loginForm.controls['email'].setValue('admin@gmail.com');
    component.loginForm.controls['password'].setValue('admine@2021');   
    component.login();     
    console.log(component.loginFormDetails);
    console.log(component.loginForm.value);
    expect(component.loginFormDetails).toEqual(component.loginForm.value);
    expect(component.user).toBeTruthy;
    // localStorage.setItem('userData', myData.login[0].email);  
    // console.log("localstorage", localStorage.getItem('userData'))
    expect(localStorage.getItem('userData')).toBe('admin@gmail.com');   
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/studentdash']);
  });

  it('should set submitted to false when incorrect credentials entered', () => {
    component.loginForm.controls['email'].setValue('admin@gmail.com');
    component.loginForm.controls['password'].setValue('admine');   
    component.login();     
    console.log(component.loginFormDetails);
    console.log(component.loginForm.value);
    expect(component.loginFormDetails).toEqual(component.loginForm.value);
    console.log("user incorrect credential", component.user);
    expect(component.user).toBeFalsy;
  });
});


