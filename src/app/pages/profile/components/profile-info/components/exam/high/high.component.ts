import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high',
  templateUrl: './high.component.html',
  styleUrls: ['./high.component.scss']
})
export class HighComponent implements OnInit {
  inset: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  chooseButton(){
    this.inset=!this.inset;
  }
}
