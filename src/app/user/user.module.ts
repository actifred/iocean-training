import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSimpleListComponent } from './user-simple-list/user-simple-list.component';
import { UserComponent } from './user/user.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserSimpleListComponent,
    UserDetailsComponent,
    FullNamePipe,
    UserComponent,
    ProfileCardComponent,
    UserListContainerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
