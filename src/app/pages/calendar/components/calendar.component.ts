import { Component, OnInit } from '@angular/core';
import { EventSettingsModel,  MonthService, AgendaService, View } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public showMonth: true;
  public scheduleView = ['Month']
  public data: object [] = [    {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Centre USA',
    StartTime: new Date(2020, 5, 27, 9, 30),
    EndTime: new Date(2020, 5, 27, 11, 0),
    CategoryColor: '#1aaa55'
}, {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: new Date(2020, 5, 7, 12, 0),
    EndTime: new Date(2020, 5, 7, 14, 0),
    CategoryColor: '#357cd2'
}];
   selectedDate: Date = new Date(2018, 1, 15);
   eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      id: 'Id',
      subject: { name: 'EventName' },
      isAllDay: { name: 'IsAllDay' },
      startTime: { name: 'StartTime' },
      endTime: { name: 'EndTime' },
    }
  };
  onEventClick() {
    console.log('123');
    
  }
  // onPopupOpen() {
  //   alert('123')
  // }
  onActionComplete() {
    console.log('123222');
    
  }
}
