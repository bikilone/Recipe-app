import { Ingredient } from "./ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  // ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient("banana", 10),
    new Ingredient("tomatos", 10)
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addToShoppingList(data: Ingredient) {
    this.ingredients.push(data);
    this.ingredientsChanged.next(this.ingredients.slice());
    // this.ingredientChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
