import { Recipe } from './/recipe.model';
import { Subject } from 'rxjs';

export class RecipeService {
  private recipes = [
    new Recipe(
      'Spaghetti puttanesca',
      `      STEP 1: Heat the oil in a non-stick pan over a medium-low heat. Add the onion along with a generous pinch of salt and fry for 10 mins, or until soft. Add the garlic and chilli, if using, and cook for a further minute.
      
      STEP 2: Stir the tomatoes, anchovies, olives and capers into the onion, bring to a gentle simmer and cook, uncovered, for 15 mins. Season to taste.
      
      STEP 3: Meanwhile, bring a large pan of salted water to the boil. Cook the spaghetti following pack instructions, then drain and toss with the sauce and parsley.`,
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      [
        { name: 'spaghetti', amount: '300 g' },
        { name: 'tomatoes', amount: '400 g' },
        { name: 'onion', amount: 1 },
        { name: 'garlic', amount: '2 cloves' },
        { name: 'black olives', amount: 5 },
        { name: 'anchovy filets', amount: '120 g' },
        { name: 'parmesan', amount: '10 g' },
        { name: 'olive oil', amount: '3 tbsp' },
      ]
    ),
    new Recipe(
      'Melting Potatoes',
      `        STEP 1: Position rack in upper third of oven; preheat to 500°F.
        
        STEP 2: Toss potatoes, butter, oil, thyme, rosemary, salt and pepper in a large bowl. Arrange in a single layer in a 9-by-13-inch metal baking pan. (Do not use a glass dish, which could shatter.) Roast, flipping once, until browned, about 30 minutes.
        
        STEP 3: Carefully add broth and garlic to the pan. Continue roasting until most of the broth is absorbed and the potatoes are very tender, about 15 minutes more. Serve hot.`,
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg',
      [
        { name: 'potatoes', amount: '1kg' },
        { name: 'olive oil', amount: '2 tbsp' },
        { name: 'melted butter', amount: '2 tbsp' },
        { name: 'garlic', amount: '5 cloves' },
        { name: 'rosemary', amount: '1 tsp' },
        { name: 'thyme', amount: '2 tsp' },
        { name: 'chicken broth', amount: '1 cup' },
        { name: 'salt, pepper', amount: 'to taste' },
      ]
    ),
    new Recipe(
      'Ratatouille',
      `        STEP 1: Preheat the oven for 375˚F (190˚C).

        STEP 2: Slice the eggplant, tomatoes, squash, and zucchini into approximately ¹⁄₁₆-inch (1-mm) rounds, then set aside.
        
        STEP 3: Make the sauce: Heat the olive oil in a 12-inch (30-cm) oven-safe pan over medium-high heat. Sauté the onion, garlic, and bell peppers until soft, about 10 minutes. Season with salt and pepper, then add the crushed tomatoes. Stir until the ingredients are fully incorporated. Remove from heat, then add the basil. Stir once more, then smooth the surface of the sauce with a spatula.
        
        STEP 4: Arrange the sliced veggies in alternating patterns, (for example, eggplant, tomato, squash, zucchini) on top of the sauce from the outer edge to the middle of the pan. Season with salt and pepper.
        
        STEP 5: Make the herb seasoning: In a small bowl, mix together the basil, garlic, parsley, thyme, salt, pepper, and olive oil. Spoon the herb seasoning over the vegetables.
        
        STEP 6: Cover the pan with foil and bake for 40 minutes. Uncover, then bake for another 20 minutes, until the vegetables are softened.
        
        STEP 7: Serve while hot as a main dish or side. The ratatouille is also excellent the next day--cover with foil and reheat in a 350˚F (180˚C) oven for 15 minutes, or simply microwave to desired temperature.`,
      'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*',
      [
        { name: 'tomato', amount: 6 },
        { name: 'eggplant', amount: 2 },
        { name: ' yellow squash', amount: 2 },
        { name: ' zucchini', amount: 2 },
        { name: 'olive oil', amount: '2 tbsp' },
        { name: 'onion', amount: 1 },
        { name: 'garlic', amount: '4 cloves' },
        { name: 'bell pepper', amount: 2 },
        { name: 'crushed tomatoes', amount: '800 g' },
        { name: 'basil', amount: '4 tsp' },
        { name: 'thyme', amount: '2 tsp' },
        { name: 'minsed garlic', amount: '1 tbsp' },
        { name: 'salt, pepper', amount: 'to taste' },
      ]
    ),
  ];

  // recipeSelected = new EventEmitter<Recipe>();
  recipeSelected = new Subject<Recipe>(); //  nie użyuwane? patrz recipe.component.ts

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes;
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
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
