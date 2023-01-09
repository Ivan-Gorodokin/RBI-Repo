import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipeService } from './recipes/recipes.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeDefaultComponent,
    RecipeEditComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeDefaultComponent,
    RecipeEditComponent,
  ],
})
export class RecipesModule {}
