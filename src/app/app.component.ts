import { Component, Input, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "courseProject1";
  navigation: string = "recipes";
  onNavigationClicked(data: string) {
    this.navigation = data;
  }
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyAl5S1O5M7xtzJ1-9mbEYqtd6NbK_XsnR8",
      authDomain: "ng-recipe-book-52eaa.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-52eaa.firebaseio.com",
      projectId: "ng-recipe-book-52eaa",
      storageBucket: "ng-recipe-book-52eaa.appspot.com",
      messagingSenderId: "710513933051",
      appId: "1:710513933051:web:194ec8696620988f"
    };
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    firebase.initializeApp(firebaseConfig);
  }
}
