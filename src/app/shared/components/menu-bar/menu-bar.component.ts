import { Component, OnInit } from '@angular/core';

import { menuItem, tabItem } from './menu-item';
import { TabMenuService } from "../../services/tabMenu.service";
import { ActivatedRoute } from "@angular/router";
import { isObject } from 'util';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],

})
export class MenuBarComponent implements OnInit {

  constructor(
    public data: TabMenuService,
    private activatedRoute: ActivatedRoute
  ) {
    this.menuItem = menuItem;
    this.tabItem = tabItem;
  }
  nav: Number = 0;
  navFull: boolean;
  splitedUrl: Array<string>;
  menuItem: Array<object>;
  tabItem: Array<object>;
  isShow: boolean = false;
  patientId: number;
  test: any;
  showMenu() {
    this.isShow = !this.isShow;
  }

  ngOnInit(): void {

    this.splitedUrl = window.location.href.split('/');
    this.data.currentMessage.subscribe(res => {
      this.isShow = res;
      this.patientId = res;
    });
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    this.nav = 1;
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "100px";
    this.nav = 0;
  }

}
