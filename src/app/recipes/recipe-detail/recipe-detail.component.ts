import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "src/app/shared/recipe.service";
import { ShoppingListService } from "src/app/shared/shopping-list.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}
  onAddToShoppingList(data) {
    data.forEach(ingredient => {
      this.shoppingListService.addToShoppingList(ingredient);
    });
  }
}
