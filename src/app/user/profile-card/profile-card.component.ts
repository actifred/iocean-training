import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input()
  public user!: Person;

  @Output()
  public goToUser = new EventEmitter<string>();

  public onClick() {
    console.log('NAVIGUER VERS USER ', this.user.id);
    this.goToUser.emit(this.user.id);
  }

}
