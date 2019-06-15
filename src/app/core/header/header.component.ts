import { Component } from "@angular/core";
import { DataService } from "../../shared/data.service";
import { RecipeService } from "../../shared/recipe.service";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  constructor(
    private dataService: DataService,
    private recipeService: RecipeService,
    public authService: AuthService
  ) {}

  onSaveData() {
    this.dataService
      .postRecipes()
      .subscribe(response => console.log(response), err => console.log(err));
  }
  onFetchData() {
    this.dataService.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
}
