import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import {Recipe} from "../recipe.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  recipePath: string;
  recipeIndex: number;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipePath = params['recipePath'];
      this.selectedRecipe = this.recipeService.getRecipeByWebPath(
        this.recipePath
      );
      this.recipeIndex = this.recipeService.getIndexByWebpath(this.recipePath);
    });
  }

  addToShoppingList() {
    this.shoppingListService.addIngredientsToShoppingList(
      this.selectedRecipe.ingredients
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.recipeIndex);
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
