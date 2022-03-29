import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const role = localStorage.getItem('role');

    if (!this.auth.isAuthenticated() || role !== expectedRole) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
