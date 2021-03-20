import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    IngredientsChange= new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tamatos',10)
      ];
    getINgredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.IngredientsChange.emit(this.ingredients.slice());
    }
}