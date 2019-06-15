import * as firebase from "firebase";
import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));
  }
  singinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        this.router.navigate(["/"]);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token));
      })
      .catch(err => console.log(err));
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
