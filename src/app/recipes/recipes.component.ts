import { Component, OnInit } from '@angular/core';
import { Recipe } from './/recipe.model';
import { RecipeService } from './/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe; // pozostałość po innej implementacji? sprawdzić czy można to usunąć

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((caughtRecipe: Recipe) => {
      this.currentRecipe = caughtRecipe;
    });
  }
}
