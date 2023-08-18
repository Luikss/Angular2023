import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    this.updateOrAddIngredient(form.value.name, form.value.amount);
    form.reset();
    this.editMode = false;
  }

  private updateOrAddIngredient(name: string, amount: number) {
    const ingredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, ingredient)
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}
