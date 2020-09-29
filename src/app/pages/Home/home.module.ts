import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { OpenClientsComponent } from './components/open-clients/open-clients.component';
import { RecentClientsComponent } from './components/recent-clients/recent-clients.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home.component';

import { NoteComponent } from './components/note/note.component';
import { TodayComponent } from './components/today/today.component';
import {ButtonsModule} from '@progress/kendo-angular-buttons'
@NgModule({
  declarations: [OpenClientsComponent, RecentClientsComponent, HomeComponent, NoteComponent, TodayComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ButtonsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
