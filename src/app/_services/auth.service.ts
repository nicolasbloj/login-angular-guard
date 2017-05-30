import { User } from '../_model/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    console.log("auth.service.login");
    //Here go will to database and get all user's data.
    if (username === "nicolas" && password === "1234") { // where.
      let user: User = { username: username, password: password };
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout() {
    console.log("auth.service.logout");
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }


}
