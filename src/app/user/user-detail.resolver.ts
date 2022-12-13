import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Person } from '../models/person';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailResolver implements Resolve<Person> {

  constructor(private _userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> {
    return this._userService.getUserById(route.params['id']);
  }
}
