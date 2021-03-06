import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private router: Router
  ) { }

  displayedColumns = [
    'check',
    'No.',
    'Date',
    'Invoice',
    'Amount',
    'Unpaid'
  ];

  displayedColumnsPay = [
    'Pay'
  ];

  ngOnInit(): void {  
  }

  routeCheckout(){
    this.router.navigateByUrl('pages/profile/invoice/medical-bill');
  }

}
