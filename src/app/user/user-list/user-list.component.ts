import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {

  @Input()
  public users : Person[] = [];

  @Input()
  public loading: boolean = false;

  @Output()
  public cardClicked = new EventEmitter<string>();

  @Output()
  public filterChanged = new EventEmitter<string>();

  onClick(userId: string) {
    this.cardClicked.emit(userId)
  }

  onFilterUsers(srchStr: string) {
    this.filterChanged.emit(srchStr)
  }

}
