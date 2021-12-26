import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TrainerAuthGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router
  ){}
  canActivate(): boolean{
    if(this.authService.UserLoggedIn()){
      return true
    } else{
      this.router.navigate(['login'])
      return false
    }
  }
  
}
