import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { of } from 'rxjs';


describe('ApiService', () => {
  let service: ApiService;
  let mockHttpClient:any;
  // let httpClientTestingModule: HttpClientTestingModule;

  beforeEach(() => {
    service = new ApiService(mockHttpClient)
    });
   
    it('should return student data', () => {
    let mockResponse:any = [{
      "id": 1,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000",
      "title": "json-server",
      "author": "typicode"
    },
    {
      "id": 2,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000"
    }];
    // let res  = mockResponse;    

    spyOn(service, "getStudent").and.returnValue(of(mockResponse))
      service.getStudent().subscribe(res => {
        expect(res).toEqual(mockResponse);

      })      
    
  });

  it('should delete student data', () => {
    let mockResponse:any = [
    {
      "id": 2,
      "firstName": "Shubham",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000"
    }];
    let response;

    spyOn(service, "deletStudent").and.returnValue(of(mockResponse))
      service.deletStudent(1).subscribe(res => {
        // response = res
        console.log("delete student data", res)
        expect(res.length).toEqual(1);
      })
      
    
  });

  it('should post student data', () => {
    let DataBase = [
      {
        "id": 1,
        "firstName": "Shubham",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000",
        "title": "json-server",
        "author": "typicode"
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
        "firstName": "Anupama",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000",
        "title": "json-server",
        "author": "typicode"
      }
    ]

    let studentDetail = {
      "id": 3,
      "firstName": "Anupama",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000",
      "title": "json-server",
      "author": "typicode"
    }
    let response;


    spyOn(service, "postStudent").and.returnValue(of(DataBase))
      service.postStudent(studentDetail).subscribe(res => {
        expect(res).toEqual(DataBase);        
      })
    
    
  });

  it('should update student data', () => {
    let DataBase = [
      {
        "id": 1,
        "firstName": "Shubham",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000",
        "title": "json-server",
        "author": "typicode"
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
        "firstName": "Anupam",
        "lastName": "Doria",
        "email": "abcd@gmail.com",
        "mobile": "987654321",
        "fees": "5000",
        "title": "json-server",
        "author": "typicode"
      }
    ]

    
    
    let studentDetail = {
      "id": 3,
      "firstName": "Anupam",
      "lastName": "Doria",
      "email": "abcd@gmail.com",
      "mobile": "987654321",
      "fees": "5000",
      "title": "json-server",
      "author": "typicode"
    }
    let response;


    spyOn(service, "updateStudent").and.returnValue(of(DataBase))
      service.updateStudent(3, studentDetail).subscribe(res => {
        console.log("update student res", res);
        expect(res).toEqual(DataBase);        
      })
    
    
  });

   
  });

  
