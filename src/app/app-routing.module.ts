import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {RouterModule, Routes} from "@angular/router";
import { RecipesResolverService } from './recipes/recipes-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    resolve: [RecipesResolverService], // nie powinno być potrzebne tu, ale inaczej nie RecipeList jest pusty?
    children: [
      { path: '', component: RecipeDefaultComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':recipePath',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':recipePath/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
