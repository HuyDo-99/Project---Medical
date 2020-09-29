import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-tab-row-menu',
  templateUrl: './tab-row-menu.component.html',
  styleUrls: ['./tab-row-menu.component.scss']
})
export class TabRowMenuComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }
  patientId: number;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
  }

}
