import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredients.model";
import { ShoppingListService } from "src/app/shared/shopping-list.service";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @Output() shoppingListEdited = new EventEmitter<Ingredient>();
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addToShoppingList() {
    const name: string = this.nameInput.nativeElement.value;
    const amount: number = this.amountInput.nativeElement.value;
    this.shoppingListService.addToShoppingList({ name, amount });
  }
}
