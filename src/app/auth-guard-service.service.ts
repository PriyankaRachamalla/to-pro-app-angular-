import { Injectable } from '@angular/core';
import {CanActivate,CanActivateChild, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;

  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }  
} 