import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  // authgaurd gaurds router
  constructor(private router: Router) { }
  canActivate(): boolean {

    if(localStorage.getItem("userData")){
      // if valid user return true
      return true;
    }else{
      this.router.navigate(['login']);
      //if invlaid user return false
      return false;
    }
    
  }
}
