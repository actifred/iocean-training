import { Component, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input()
  public user!: Person;

  public onClick() {
    console.log('NAVIGUER VERS USER ', this.user.id);
  }

}
