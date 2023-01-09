import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ShoppingListService } from '../shopping-list.service';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  IngredientData: Ingredient;
  ongoingSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;
  @ViewChild('f', { static: false }) populatedForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ongoingSubscription =
      this.shoppingListService.editingIngredient.subscribe((index: number) => {
        // editingIngredient nie jest używany - dlatego błąd; przerobić całość
        this.editedItemIndex = index;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.populatedForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount,
        });
      });
  }

  ngOnDestroy() {
    this.ongoingSubscription.unsubscribe();
  }

  onSubmitIngredient(form: NgForm) {
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, form);
    } else {
      this.shoppingListService.submitIngredient(form);
    }
    this.editMode = false;
    form.resetForm();
  }

  onClearForm() {
    this.editMode = false;
    this.populatedForm.resetForm();
  }

  onRemoveIngredient() {
    this.shoppingListService.removeIngredient(this.editedItemIndex);
    this.onClearForm();
  }
}
