import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service';
import { User } from '../_model/user.model';


@Component({
  selector: 'nab-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private _authService: AuthService) {
  }

  ngOnInit() { }

  login(username: string, password: string): void {
    console.log("home.component.login");
    this._authService.login(username, password);
  }

  logout() {
    console.log("home.component.logout");
    this._authService.logout();
  }

}
