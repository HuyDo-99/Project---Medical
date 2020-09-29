import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';

//model
import { TestModel } from "../../model/test.model";

//service
import { TestService } from '../../services/test.service'
import { Route } from '@angular/compiler/src/core';
import { AlertService } from "../../../../../../../../shared/services/alert.service";
@Component({
  selector: 'app-functional-tests',
  templateUrl: './functional-tests.component.html',
  styleUrls: ['./functional-tests.component.scss']
})
export class FunctionalTestsComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public testService: TestService,
    public alertService: AlertService,
  ) { }

  displayedColumns = [
    "Test"
  ];
  displayedColumnsData = [
    'Order'
  ];
  dataSource: any;
  patientId: number;
  package: any;
  testList: any;
  testId: number;
  numericResult: number;
  testDate: string;
  patientTestResults: any;


  private editedRowIndex: number;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
    this.getPackagesDetail();
  }
  clickAdd() {
    document.getElementById('add-button').click();
  }

  getPackagesDetail() {
    this.testService.getPackagesDetail(this.patientId, null, null, null).subscribe(packageData => {
      this.package = packageData;
      console.log('curren package', this.package);
      
      // this.displayedColumns.splice(1, this.displayedColumns.length);a      
      for (let i = 0; i < this.package.length; i++) {
        for (let j = 0; j < this.package[i].length; j++) {
          if (this.package[i][j].TestDate !== null && !this.displayedColumns.includes(this.package[i][j].TestDate.split('T')[0])) {
            this.displayedColumns.push(this.package[i][j].TestDate.split('T')[0]);
          }
        }
      }
      this.dataSource = new MatTableDataSource(this.package);
    });

  }
 
}
