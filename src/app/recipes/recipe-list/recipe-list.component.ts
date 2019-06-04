import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "prvi",
      "bla bla bal",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ),
    new Recipe(
      "drugi",
      "bla bla bal",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ),
    new Recipe(
      "treci",
      "bla bla bal",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    )
  ];
  constructor() {}

  onSelect(data: Recipe) {
    this.recipeSelected.emit(data);
  }

  ngOnInit() {}
}
