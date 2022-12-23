import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '..//..//recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  selectedWebPath: string; // usunąć input, przypisać Subject z RecipeService?

  constructor(private recipeService: RecipeService) {} // na razie może zostać puste, przyda się później

  ngOnInit(): void {
    this.selectedWebPath = this.selectedRecipe.webPath;
  }
}
