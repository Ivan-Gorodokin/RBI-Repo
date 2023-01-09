import {Ingredient} from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;
  public ingredients?: Ingredient[];
  public webPath: string;

  constructor(
    name: string,
    desc: string,
    imgPath: string,
    ingredients?: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imgPath = imgPath;
    this.ingredients = ingredients;
    this.webPath = this.generateWebPath();
  }

  generateWebPath() {
    let name = this.name.toLowerCase();
    this.webPath = '';
    for (let letter of name) {
      if (letter === ' ') {
        this.webPath = this.webPath.concat('_');
      } else {
        this.webPath = this.webPath.concat(letter);
      }
    }
    return this.webPath;
  }
}
