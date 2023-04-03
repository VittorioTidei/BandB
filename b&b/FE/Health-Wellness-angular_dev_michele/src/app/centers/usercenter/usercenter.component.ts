import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CenterDTO } from 'src/dto/centerdto';

@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.css']
})
export class UsercenterComponent implements OnInit, OnChanges{

  @Input() research : CenterDTO[];
  centerList : CenterDTO[] = [];
  constructor() {

   }

   ngOnChanges( changes: SimpleChanges){
    console.log(JSON.stringify(changes.research.currentValue));
    this.centerList = changes.research.currentValue;
   }

  ngOnInit() {
  }

}
