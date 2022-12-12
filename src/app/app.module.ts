import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { UserSimpleListComponent } from './user-simple-list/user-simple-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProfileCardComponent,
    FullNamePipe,
    CalculetteComponent,
    UserSimpleListComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
