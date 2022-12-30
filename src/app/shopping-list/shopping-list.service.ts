import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs-compat';
import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('tomatoes', 5),
    new Ingredient('potatoes', 4),
    new Ingredient('olives', 'a handful'),
    new Ingredient('chicken breast', 2),
    new Ingredient('olive oil', '1 spoon'),
    new Ingredient('salt, pepper', 'to taste'),
  ];
  addedIngredient: Ingredient;
  updatedIngredient: Ingredient;

  editingIngredient = new Subject<number>(); //  na razie nie używany

  // IngredientsAfterChanges = new Subject<Ingredient[]>();

  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  submitIngredient(form: NgForm) {
    this.addedIngredient = new Ingredient(form.value.name, form.value.amount);
    this.ingredients.push(this.addedIngredient);
    // this.IngredientsAfterChanges.next(this.ingredients.slice());
  }

  //  POPRZEDNIA WERSJA
  //...................
  // updateIngredient(index: number, ingredient: Ingredient) {
  //   this.ingredients[index] = ingredient;
  //   console.log(this.ingredients[index]);
  //   // this.editingIngredient.next(this.ingredients.slice());
  // }

  updateIngredient(index: number, form: NgForm) {
    this.updatedIngredient = new Ingredient(form.value.name, form.value.amount);
    this.ingredients[index] = this.updatedIngredient;
    // this.IngredientsAfterChanges.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    this.ingredients = this.ingredients.splice(index, 1);
    // this.IngredientsAfterChanges.next(this.ingredients.slice());
  }

  addIngredientsToShoppingList(newIngredients: Ingredient[]) {
    for (let ingredient of newIngredients) {
      this.ingredients.push(ingredient);
    }
  }
}
