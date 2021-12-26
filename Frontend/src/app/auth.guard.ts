import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router
  ){}
  // THIS AUTH GUARD IS TO PROTECT ALL ADMIN ROUTES ONLY-
  // THIS GUARD ALLOWS ACCESS ONLY IF ADMIN IS LOGGED IN
  canActivate():boolean{
    if(this.authService.AdminLoggedIn()){ 
      return true;
      // this means its a admin who logged in
    } else{
      this.router.navigate(['login'])
      return false
    }
  }
  
}
