import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipePath: string;
  selectedRecipe: Recipe;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipePath = params['recipePath'];
      this.selectedRecipe = this.recipeService.getRecipeByWebPath(
        this.recipePath
      );
      this.editMode = params['recipePath'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      recipeName = this.selectedRecipe.name;
      recipeImgPath = this.selectedRecipe.imgPath;
      recipeDesc = this.selectedRecipe.description;
      if (this.selectedRecipe['ingredients']) {
        for (let ingredient of this.selectedRecipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imgPath: new FormControl(recipeImgPath, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required),
      })
    );
  }

  onSubmit() {
    const submittedRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imgPath'],
      this.recipeForm.value['ingredients']
    );
    if (this.editMode) {
      const index = this.recipeService.getIndexByWebpath(this.recipePath);
      console.log(index);
      this.recipeService.updateRecipe(index, submittedRecipe);
    } else {
      this.recipeService.addRecipe(submittedRecipe);
    }
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  }

  onFormCancel() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
