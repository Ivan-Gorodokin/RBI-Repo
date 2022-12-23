import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../cookbook-app/src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  ongoingSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    //   this.ongoingSubscription =
    //     this.shoppingListService.IngredientsAfterChanges.subscribe(
    //       (ingredients: Ingredient[]) => {
    //         this.ingredients = ingredients;
    //       }
    //     );
  }

  // ngOnDestroy() {
  //   this.ongoingSubscription.unsubscribe();
  // }

  onEditItem(index: number) {
    this.shoppingListService.editingIngredient.next(index);
  }
}
