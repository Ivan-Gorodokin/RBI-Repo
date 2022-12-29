import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '..//recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/Router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipeSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeSubscription = this.recipeService.currentRecipes.subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy(): void {}

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
