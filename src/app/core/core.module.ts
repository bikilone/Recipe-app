import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from "../shared/shopping-list.service";
import { RecipeService } from "../shared/recipe.service";
import { DataService } from "../shared/data.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [ShoppingListService, RecipeService, DataService, AuthService]
})
export class CoreModule {}
