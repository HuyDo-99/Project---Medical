import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-reason-for-booking',
  templateUrl: './reason-for-booking.component.html',
  styleUrls: ['./reason-for-booking.component.scss']
})
export class ReasonForBookingComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    public patientService: PatientService,

  ) { }
  patientId: number;
  patient: any;
  mediaURL: any;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
    console.log("this.patientId",this.patientId);
    this.getPatient();
  }

  getPatient(){
    this.patientService.getPatientByPatientId(this.patientId).subscribe(data=>{
      this.patient=data;
      this.lastName=this.patient.LastName;
      this.phone=this.patient.Phone;
      this.email=this.patient.Email;
      this.address=this.patient.Address;
      this.mediaURL=this.patient.MediaURL;
      console.log("this.patient",this.patient);
    })
  }



}
