import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
//service
import { AlertService } from "../../../../../../../../shared/services/alert.service";

//models

import {DemographicsService } from "../../../../../../services/demographics.service";
import { DemographicsModel } from "../../../../../../models/demographics.model";
import { EMPTY_SELECTIONRANGE } from '@progress/kendo-angular-dateinputs/dist/es2015/calendar/models/selection-range.interface';
@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss']
})
export class DemographicsComponent implements OnInit {

  constructor(
    public alertService: AlertService,
    public activatedRoute: ActivatedRoute,
    public demographicsService: DemographicsService
  ) { }
  patientList: any;
  currentPatient : any;
  firstName : string;
  firstName1: string;
  lastName: string;
  phone: string;
  email: string;
  gender : number;
  address : string;
  dob: string;
  nationalId: string;
  relationship: string;
  patientId: number;
  profileImageString: any;
  emergencyPhone: string;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));    
    this.getAllPatient();
    this.getCurrentPatient();
    // this.getPatient();
  }
  getAllPatient (){
    this.demographicsService.getAllPatient().subscribe(data => {
            this.patientList=data;
            console.log('patientlist',this.patientList);
    });
  }
  
  getCurrentPatient (){
    this.demographicsService.getPatientById(this.patientId).subscribe(data => {
            this.currentPatient = data.find(i => i.PatientId = this.patientId);
            console.log('khách hàng hiện tại',this.currentPatient);         
            this.firstName = this.currentPatient.FirstName;
            this.lastName = this.currentPatient.LastName;
            this.phone = this.currentPatient.Phone;
            this.email = this.currentPatient.Email;
            this.gender =  this.currentPatient.Gender;
            this.address = this.currentPatient.Address;
            if(this.currentPatient.DOB == null){
              this.dob = "";
            }
            else{
              this.dob = this.currentPatient.DOB.split('T')[0];
            }
            this.nationalId = this.currentPatient.NationalId;
            this.relationship = this.currentPatient.Relationship;
            this.emergencyPhone = this.currentPatient.EmergencyPhone;     
    })
  }

  updateCurrentPatient (){
    let patient = new DemographicsModel();
      patient.FirstName = this.firstName;
      patient.LastName = this.lastName;
      patient.Phone = this.phone;
      patient.Email = this.email;
      patient.Gender = this.gender;
      patient.DOB = this.dob;
      patient.NationalId = this.nationalId;
      patient.Relationship = this.relationship;
      patient.Address = this.address;
      patient.EmergencyPhone = this.emergencyPhone;
      this.demographicsService.update(patient, this.patientId).subscribe(res => {
        console.log(patient);
        
        this.alertService.changeMessage({
          color: 'green',
          text: `Sửa thành công`
        });
      }, null, () => { this.getCurrentPatient() });
    
  }

  // getPatient() {

  //   this.patientImmunizationscheduleService.getAllPatient().subscribe(res => {
  //   this.patientList = res
  //     console.log(res);

  //   })
  // }
  // getById() {
  //   this.patientImmunizationscheduleService.getPatientById(1).subscribe(res => {
  //     console.log( res);
      
  //   })
  // }
  
}
