import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements AfterViewInit {

  @Input()
  public users : Person[] = [];

  public loading$ = this._userService.isLoading$;

  constructor(private _userService: UserService) {  
    this._userService.getUsers().subscribe({
      next: ul => {
        this.users = ul;
      }
    });
  }

  ngAfterViewInit(): void {
  }

  public onFilterUsers(recherche: string) {
    console.log(recherche);
  }

}
