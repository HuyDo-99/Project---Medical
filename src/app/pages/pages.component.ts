import { Component } from '@angular/core';

@Component({
    selector: 'app-pages',
    styleUrls: ['pages.component.scss'],
    template: `
    <div class="d-flex">
        <div class="menuLeft"><app-menu-bar></app-menu-bar></div>
        <div class="main">
        <router-outlet></router-outlet>
        </div>
        <app-notifications></app-notifications>
    </div>
    `
})

export class PagesComponent {

}