import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
