import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent implements OnInit {
  choose: boolean=true;
  showContent: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.showContent=!this.showContent;
  }
}
