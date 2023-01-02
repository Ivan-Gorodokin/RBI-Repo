import { Recipe } from './/recipe.model';
import { Subject } from 'rxjs';

export class RecipeService {
  // private recipes = [
  private recipes: Recipe[] = [];
  recipeSelected = new Subject<Recipe>(); //  nie używane? patrz recipe.component.ts
  currentRecipes = new Subject<Recipe[]>();

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeByWebPath(webPath: string): Recipe {
    for (let recipe of this.recipes) {
      if (recipe.webPath == webPath) {
        return recipe;
      }
    }
  }

  getIndexByWebpath(webPath: string): number {
    for (let recipe of this.recipes) {
      if (recipe.webPath == webPath) {
        return this.recipes.indexOf(recipe);
      }
    }
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.currentRecipes.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.currentRecipes.next(this.recipes.slice());
  }

  updateAllRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.currentRecipes.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.currentRecipes.next(this.recipes.slice());
  }
}
