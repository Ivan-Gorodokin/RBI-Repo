import { NgModule } from '@angular/core';

import { RecipeService } from './../recipes/recipes.service'; // przenieść do RecipeModule?
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { DropdownDirectiveDirective } from '../shared/dropdown.directive.directive';

@NgModule({
  declarations: [DropdownDirectiveDirective],
  providers: [ShoppingListService, RecipeService],
})
export class CoreModule {}
