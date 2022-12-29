import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://angular-backend-sim-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://angular-backend-sim-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        // map((recipes: Recipe[]) => {
        //   return recipes.map((recipe: Recipe) => {
        //     return {
        //       ...recipe,
        //       ingredients: recipe.ingredients ? recipe.ingredients : [],
        //     };
        //   });
        // }),

        //  nie działa ponieważ Recipe zostaje zamienione na Object z tymi samymi parametrami, ale bez generateWebpath();
        //  powinno zabezpieczać przed bugiem gdy brak Ingredients[]
        tap((recipes) => {
          this.recipeService.updateAllRecipes(recipes);
        })
      );
  }
}
