import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  patients: any;

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  openViewOpening() {
    document.getElementById('opening').style.display = "inline-block";
    document.getElementById('clients').style.display = "none";
  }
  hideView() {
    document.getElementById('opening').style.display = "none";
    document.getElementById('clients').style.display = "inline";
  }

  getPatients() {
    this.patientService.list().subscribe(data => {
      this.patients = data;
      console.log('DS benh nhan', this.patients);

    })
  }


}
