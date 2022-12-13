import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Person } from 'src/app/models/person';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css']
})
export class UserListContainerComponent {

  public users$ = of<Person[]>([]);

  public loading$!: Observable<boolean>;

  constructor(private _userService: UserService, private _router: Router) {  
    this.loading$ = this._userService.isLoading$;
    this.users$ = this._userService.getUsers();
  }

  public onFilterUsers(recherche: string) {
    console.log(recherche);
  }

  public onGoToUser(userId: string) {
    this._router.navigate(['users', userId])
  }

}
