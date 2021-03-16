import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
//import * as EventEmitter from 'node:events';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 // @Input() recipeIteams: {name:string, description:string,imagePath:string};
  //Recipe(name: string, desc: string, imagePath: string)
  @Input() recipeIteams:Recipe;
  @Output() recipeSelected= new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelected(){
    this.recipeSelected.emit();
  }

}