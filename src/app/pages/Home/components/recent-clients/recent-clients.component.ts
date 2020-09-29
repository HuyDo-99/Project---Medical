import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertService } from "../../../../shared/services/alert.service";
//service
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-recent-clients',
  templateUrl: './recent-clients.component.html',
  styleUrls: ['./recent-clients.component.scss']
})
export class RecentClientsComponent implements OnInit {

  patients: any;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private patientService: PatientService
  ) { }
   
 listPatient: any;

 getListPatient(){
   this.patientService.list().subscribe(patient => {
      this.listPatient = patient;
      console.log('danh sách bệnh nhân',this.listPatient);
   });
 }
 
  ngOnInit(): void {
    this.getListPatient();
  }

}
