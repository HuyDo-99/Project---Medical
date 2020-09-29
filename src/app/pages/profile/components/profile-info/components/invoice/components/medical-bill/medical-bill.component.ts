import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-medical-bill',
  templateUrl: './medical-bill.component.html',
  styleUrls: ['./medical-bill.component.scss']
})
export class MedicalBillComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor() { }

  displayedColumnsBill = [
    'No.',
    'Invoice',
    'Amount'
  ];

  displayedColumnsMedication = [
    'No.',
    'Name',
    'SKU',
    'Quantity',
    'Unit cost',
    'Tax',
    'Discount',
    'Amount'
  ];

  ngOnInit(): void {
  }

}
