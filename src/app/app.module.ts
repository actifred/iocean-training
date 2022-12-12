import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProfileCardComponent,
    FullNamePipe,
    CalculetteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
