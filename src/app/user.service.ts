import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, defer, delay, finalize, map, Observable, of, share, shareReplay, Subject, take, tap } from 'rxjs';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private _httpClient: HttpClient) { }

  private userRequest$ !: Observable<Person[]>;

  getNextUserId(userId: string) {
    return this.getUsers().pipe(
      take(1),
      map(ul => {
        const userPos = ul.findIndex(u => u.id === userId);
        if (userPos === ul.length) {
          return ul[0].id
        } else {
          return ul[userPos + 1].id
        }
      })
    )
  }

  getUserById(userId: string) {
    return this._httpClient.get<Person>(`http://localhost:3000/users/${userId}`).pipe(delay(1500));
  }

  getUsers() {
    if (!this.userRequest$) {
      this.userRequest$ = defer(() => {
        this.isLoading$.next(true);
        return this._httpClient.get<Person[]>('http://localhost:3000/users?_limit=20')
                .pipe(
                  delay(800),
                  finalize(() => this.isLoading$.next(false))
                )
      }).pipe(shareReplay())
    }
    return this.userRequest$;
  }
}
