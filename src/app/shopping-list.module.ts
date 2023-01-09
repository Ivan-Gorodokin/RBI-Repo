import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ShoppingListComponent, ShoppingListEditComponent],
})
export class ShoppingListModule {}
