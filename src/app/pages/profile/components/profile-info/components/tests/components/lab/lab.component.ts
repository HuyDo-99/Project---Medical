import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';

//service
import { TestService } from '../../services/test.service'

// model
import { TestModel } from "../../model/test.model";
@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  displayedColumns = [
     'Test'
  ];
  displayedColumnsData = [
    'Graph',
    'Order'
  ];
  packagesList: any;
  patientId: any;
  package: any;
  dataSource: any;
  packageDefault: number;
  isActive: number;
  testList: any;
  testId: number;

  constructor(
    private router: Router,
    private testService: TestService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
    this.getListOfPackages();
  }

  // lay danh sach packages trong lab module
  getListOfPackages() {
    this.testService.getAllPackage().subscribe(data => {
      this.packagesList = data;
      this.packageDefault = this.packagesList.PackageId
      console.log('danh sach packages in lab', this.packagesList);
      // this.getPackagesDetail(this.packageDefault);
      // this.isActive = this.packageDefault;
    })
  }
  // lay chi tiet cua tung package
  getPackagesDetail(packagesId: number) {
    this.isActive = packagesId;
    this.testService.getPackagesDetail(this.patientId, null, packagesId, null).subscribe(packageData => {
      this.package = packageData;
      console.log('curren package', this.package);
      this.displayedColumns.splice(1, this.displayedColumns.length)
      for (let i = 0; i < this.package.length; i++) {
        for (let j = 0; j < this.package[i].length; j++) {
          if (this.package[i][j].TestDate != null &&  !this.displayedColumns.includes(this.package[i][j].TestDate.split('T')[0])) {
            this.displayedColumns.push(this.package[i][j].TestDate.split('T')[0]);
          }
        }
      }
      this.dataSource = new MatTableDataSource(this.package);     
    })
  }
}
