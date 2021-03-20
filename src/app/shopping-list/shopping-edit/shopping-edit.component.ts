import { Component, ElementRef, OnInit, ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  @Output() ingredentAdded= new EventEmitter<Ingredient>();
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredent= new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredent);
  }

}
