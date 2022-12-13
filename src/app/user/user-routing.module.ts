import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailResolver } from './user-detail.resolver';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSimpleListComponent } from './user-simple-list/user-simple-list.component';

const routes: Routes = [
      {
          path: '',
          component: UserListComponent,
      },
      {
          path: 'list',
          component: UserSimpleListComponent
      },
      {
          path: ':id',
          component: UserDetailsComponent,
          resolve: {
            user: UserDetailResolver
          }
      },
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
