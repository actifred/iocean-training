import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Subject, Subscription, switchMap, takeUntil, tap } from 'rxjs';
import { Person } from '../models/person';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  public user!: Person;

  public userId = '';

  public nextUserId = '';

  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _router: Router
  ) {
    this._activatedRoute.params.pipe(
      takeUntil(this._unsubscribe$),
      tap(p => this.userId = p['id']),
      switchMap(p => 
        this._userService.getUserById(this.userId)),
      tap(u => this.user = u),
      mergeMap(u => this._userService.getNextUserId(u.id))
    ).subscribe(nextUser => {
        this.nextUserId = nextUser
      });
    
  }

  ngOnInit(): void {
  }

  goToNext() {
    this._router.navigate(['/users', this.nextUserId])
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
