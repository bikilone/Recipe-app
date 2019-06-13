import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "./ingredients.model";
import { Subject } from "rxjs/Subject";
import { ShoppingListService } from "./shopping-list.service";
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(
      "prvi",
      "bla bla bal",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      [new Ingredient("bananan", 12)]
    ),
    new Recipe(
      "drugi",
      "bla bla bal",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      [new Ingredient("bananan", 12), new Ingredient("bananan", 12)]
    ),
    new Recipe(
      "treci",
      "bla bla bal",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      [new Ingredient("bananan", 12)]
    )
  ];
  constructor(private slService: ShoppingListService) {}
  getAllRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;

    this.recipesChanged.next(this.recipes.slice());
  }
  deleterecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient) {
    this.slService.addToShoppingList(ingredients);
  }

  recipeSelected = new EventEmitter<Recipe>();
}
