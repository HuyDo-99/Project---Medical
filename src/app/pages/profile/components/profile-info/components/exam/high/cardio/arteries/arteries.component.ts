import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arteries',
  templateUrl: './arteries.component.html',
  styleUrls: ['./arteries.component.scss']
})
export class ArteriesComponent implements OnInit {
  choose: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  showContent(){
    this.choose=!this.choose;
  }
  showContent1(){
    this.choose=!this.choose;
  }
}
