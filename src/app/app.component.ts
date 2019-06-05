import { Component, Input } from "@angular/core";
import { ShoppingListService } from "./shared/shopping-list.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = "courseProject1";
  navigation: string = "recipes";
  onNavigationClicked(data: string) {
    this.navigation = data;
  }
}
