import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "src/app/shared/recipe.service";
import { ShoppingListService } from "src/app/shared/shopping-list.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  onAddToShoppingList(data) {
    data.forEach(ingredient => {
      this.shoppingListService.addToShoppingList(ingredient);
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.activeRoute });
  }

  onDelete() {
    this.recipeService.deleterecipe(this.id);
    this.router.navigate(["../"], { relativeTo: this.activeRoute });
  }
}
