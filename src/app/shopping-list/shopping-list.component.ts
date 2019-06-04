import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("banana", 10),
    new Ingredient("tomatos", 10)
  ];

  addToShoppingList(data: Ingredient) {
    this.ingredients.push(data);
  }
}
