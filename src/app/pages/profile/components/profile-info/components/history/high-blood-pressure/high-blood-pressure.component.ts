import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-blood-pressure',
  templateUrl: './high-blood-pressure.component.html',
  styleUrls: ['./high-blood-pressure.component.scss']
})
export class HighBloodPressureComponent implements OnInit {

  constructor() { }
 
  btnStyle2: boolean = true;
  isShow: boolean = false;

  ngOnInit(): void {
  }

  rating(){
    this.isShow = !this.isShow;
  }
 
  changeStyle2() {
    this.btnStyle2 = !this.btnStyle2;
  }
  currentRate0 = 1;
  currentRate1 = 2;
  currentRate2 = 3;
  currentRate3 = 8;
  currentRate4 = 8;
}
