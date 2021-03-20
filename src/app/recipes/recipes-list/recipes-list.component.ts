import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes:Recipe[];
  constructor(private recipeService:RecipeService) { }
  ngOnInit(): void {
    this.recipeService.getRecipe();
  }
  onRecipeSelected(recipe: Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }


}
