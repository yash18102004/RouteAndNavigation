import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // let issLoggedId = localStorage.getItem('isLoggedIn')
      // if (issLoggedId == 'false') {
      //   alert('Not Authenticated User !!')
      //   return false; 
      // }

      const localData = localStorage.getItem('isLoggedIn')
      if (localData && localData === 'true') {
        return true;
        
      }else{
        this.router.navigate(['/login1']);
        alert('sorrry bhai')
      }
    return true;
  }
  
}
