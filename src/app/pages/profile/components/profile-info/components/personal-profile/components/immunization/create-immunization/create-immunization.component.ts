import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//service
import { AlertService } from "../../../../../../../../../shared/services/alert.service";
import { PatientImmunizationscheduleService } from "../../../../../../../services/patientImmunizationschedule.service";
//models
import { PatientImmunizationscheduleModel } from "../../../../../../../models/PatientImmunizationschedule.model";
@Component({
  selector: 'app-create-immunization',
  templateUrl: './create-immunization.component.html',
  styleUrls: ['./create-immunization.component.scss']
})
export class CreateImmunizationComponent implements OnInit {

  constructor(
    public alertService: AlertService,
    public dialogRef: MatDialogRef<CreateImmunizationComponent>,
    public patientImmuService: PatientImmunizationscheduleService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  patientImmuId: number;
  appliedDate: string;
  description: string;
  vaccine: string;
  type: number;
  
  ngOnInit(): void {
    console.log(this.data.PatientId);

  }

  createImmu() {
    let model = new PatientImmunizationscheduleModel();
    model.PatientId = this.data.PatientId;
    model.PatientImmunizationscheduleId = this.patientImmuId;
    model.AppliedDate = this.appliedDate;
    model.Type = this.type;
    model.Description = this.description;
    model.Vaccine = this.vaccine;
    this.patientImmuService.create(model).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Tao thành công`
      });
      this.closeDialog();
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
