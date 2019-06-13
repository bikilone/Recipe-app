import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";
import { RecipeService } from "../shared/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { Response } from "@angular/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {}
  onSaveData() {
    this.dataService
      .postRecipes()
      .subscribe(response => console.log(response), err => console.log(err));
  }
  onFetchData() {
    this.dataService.getRecipes();
  }
}
