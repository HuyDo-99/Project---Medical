import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  constructor() { }
  displayedColumnsContract = [
     'Contract'
  ];

  displayedColumns = [
    'checkbox',
    'No.',
    'Date',
    'Amount',
    'Unpaid'
  ];

  ngOnInit(): void {
  }

}
