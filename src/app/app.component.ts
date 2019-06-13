import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "courseProject1";
  navigation: string = "recipes";
  onNavigationClicked(data: string) {
    this.navigation = data;
  }
}
