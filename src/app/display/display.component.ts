import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayStatus = true;
  constructor() { }
  clicks :number[]= [];
  count = 0;
  ngOnInit(): void {
  }
  onClick(){
    this.displayStatus = !this.displayStatus;
    this.count+=1;
    this.clicks.push(this.clicks.length+1);
  }
}
