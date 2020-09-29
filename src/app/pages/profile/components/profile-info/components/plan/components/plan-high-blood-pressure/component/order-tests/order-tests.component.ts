import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
//service
import { TestCategoryService } from "../../../../services/test-category.service";
@Component({
  selector: 'app-order-tests',
  templateUrl: './order-tests.component.html',
  styleUrls: ['./order-tests.component.scss']
})
export class OrderTestsComponent implements OnInit {

  constructor(
      private testCategoryService: TestCategoryService
  ) { }
  dataSource: any;
  displayedColumns = [
    'Name', 'icon'
  ];

  data = [
    {
      "Name": 'RBC',
    }, 
    {
      "Name": 'WBC',
    }, 
    {
      "Name": 'White blood cell differentiation',
    }, 
    {
      "Name": 'Hb',
    }, 
    {
      "Name": 'Ht',
    }, 
    {
      "Name": 'MCV',
    }, 
    {
      "Name": 'MCH',
    }, 
    {
      "Name": 'MCHC',
    }, 
    {
      "Name": 'Platelets',
    }, 
    {
      "Name": 'RDW red blood cell width distribution',
    }, 
]


  listTestCategory: any;
  isActive: number;
  ngOnInit(): void {
    this.getTestCategory();
    this.dataSource = new MatTableDataSource(this.data);
  }

  getTestCategory(){
    this.testCategoryService.list().subscribe(res => {
       this.listTestCategory = res;
       this.isActive = this.listTestCategory.TestcategoryId;
       console.log(this.listTestCategory);
    });
  }

}
