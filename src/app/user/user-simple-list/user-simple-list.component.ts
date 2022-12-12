import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-simple-list',
  templateUrl: './user-simple-list.component.html',
  styleUrls: ['./user-simple-list.component.css']
})
export class UserSimpleListComponent implements OnInit {

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
  ngOnInit(): void {
  }

}
