import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


// service
import { TestService } from "./services/test.service";


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  testList: any;

  constructor(
    private router: Router,
    private testService: TestService,
  ) { }

  ngOnInit(): void {
  }

  // getPackages(id) {
  //   this.testService.getAllPackage(id).subscribe(data => {
  //     this.testList = data;
  //     console.log('danh sach packages', data);

  //   })
  // }

}
