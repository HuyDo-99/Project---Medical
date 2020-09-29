import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: 'app-diagnosis-high-blood-pressure',
  templateUrl: './diagnosis-high-blood-pressure.component.html',
  styleUrls: ['./diagnosis-high-blood-pressure.component.scss']
})
export class DiagnosisHighBloodPressureComponent implements OnInit {

  constructor() { }
  dataSource: any;
  displayedColumns = [
    '15/03/2020'
  ];
  displayedColumns1 = [
    'Possible other diagnosis'
  ];
  data = [
    {
      "Name": 'Value 1',
    },
    {
      "Name": 'Value 1',
    }
]

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

}
