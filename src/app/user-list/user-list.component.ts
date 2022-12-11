import { Component, Input } from '@angular/core';
import { Person } from '../models/person';
import { profiles } from '../resources/profiles';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {

  @Input()
  public users : Person[] = profiles;

  public onFilterUsers(recherche: string) {
    console.log(recherche);
  }

}
