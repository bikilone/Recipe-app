import { Recipe } from "../recipes/recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredients.model";

export class RecipeService {
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

  recipeSelected = new EventEmitter<Recipe>();
}
