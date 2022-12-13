import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SplashComponent } from './splash/splash.component';
import { countryList } from './resources/countries';
import { LoginFormComponent } from './login-form/login-form.component';

export const COUNTRIES = new InjectionToken<string>('CountryList');

@NgModule({
  declarations: [
    AppComponent,
    CalculetteComponent,
    SplashComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: COUNTRIES, useValue: countryList}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
