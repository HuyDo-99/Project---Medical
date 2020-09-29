import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication-history',
  templateUrl: './medication-history.component.html',
  styleUrls: ['./medication-history.component.scss']
})
export class MedicationHistoryComponent implements OnInit {

  constructor() { }

  displayedColumns = [
    'Name',
    'Dose',
    'Frequency',
    'End Date',
    'Route',
    'Detail',
    'Purpose'
  ];

  ngOnInit(): void {
  }

}
