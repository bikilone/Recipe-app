import { Ingredient } from "./ingredients.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  // ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient("banana", 10),
    new Ingredient("tomatos", 10)
  ];

  addToShoppingList(data: Ingredient) {
    this.ingredients.push(data);
    // this.ingredientChanged.emit(this.ingredients);
    console.log("sl service");
  }
}
