import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _router: Router) {}

  onDeactivateRoute(event: any) {
    // console.log('deactivate', event)
  }

  onActivateRoute(event: any) {
    // console.log('activate', event)
  }

}