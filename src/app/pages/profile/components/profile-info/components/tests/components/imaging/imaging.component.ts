import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imaging',
  templateUrl: './imaging.component.html',
  styleUrls: ['./imaging.component.scss']
})
export class ImagingComponent implements OnInit {

  constructor() { }

  displayedColumns = [
    'Test',
    '12/08/2020',
    '17/08/2020',
    '18/08/2020',
    '19/08/2020'
  ];
displayedColumnsData = [
   'Order'
];

  ngOnInit(): void {
  }

}
