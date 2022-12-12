import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, defer, delay, finalize, of, Subject, tap } from 'rxjs';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private _httpClient: HttpClient) { }

  getUsers() {
    return defer(() => {
      this.isLoading$.next(true);
      return this._httpClient.get<Person[]>('http://localhost:3000/users?_limit=20')
              .pipe(
                delay(800),
                finalize(() => this.isLoading$.next(false))
              )
    });
  }
}
