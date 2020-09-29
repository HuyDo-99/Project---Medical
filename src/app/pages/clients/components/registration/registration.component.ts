import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { from } from 'rxjs';
import { RegistrationService } from "../../services/registration.service";
import { RegistrationModel } from "../../models/registration.model";
import { AlertService } from "../../../../shared/services/alert.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public registrationService: RegistrationService,
    private router: Router,
    private alertService: AlertService
 
  ) { }

  profileImagePath: any;
  profileImageString: any;
  
  processFileProfileImage(files: File) {
    var reader = new FileReader();
    this.profileImagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.profileImageString = reader.result;
      // console.log(this.profileImageString.split(",")[1]);
    };
  }
  firstName : string;
  lastName: string;
  phone: string;
  email: string;
  gender : number;
  address : string;
  nationalId: string;
  emergencyPhone: string;
  DOB: string;
  ngOnInit(): void {
  }

  createCustomer() {
    let customer = new RegistrationModel();
    customer.FirstName = this.firstName;
    customer.LastName = this.lastName;
    customer.Phone = this.phone;
    customer.Email = this.email;
    customer.DOB = this.DOB;
    customer.Gender = this.gender;
    customer.Address = this.address;
    customer.NationalId = this.nationalId;
  
    customer.MediaURL = this.profileImageString.split(",")[1];
    customer.EmergencyPhone = this.emergencyPhone;
    this.registrationService.create(customer).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Tạo thành công`
      });

    })
  }
}
