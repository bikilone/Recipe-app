import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipes/recipe.model";
import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  postRecipes() {
    return this.http.put(
      "https://ng-recipe-book-52eaa.firebaseio.com/recipes.json",
      this.recipeService.getAllRecipes()
    );
  }

  getRecipes() {
    return this.http
      .get("https://ng-recipe-book-52eaa.firebaseio.com/recipes.json")
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            console.log(recipe);
            recipe["ingredients"] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
