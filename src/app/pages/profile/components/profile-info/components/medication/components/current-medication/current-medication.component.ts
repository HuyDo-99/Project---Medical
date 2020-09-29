import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

//service
import { AlertService } from "../../../../../../../../shared/services/alert.service";
import { CurrentMedicationModel } from '../../models/currentmedication.model';

import { MedicationService } from "../../services/medication.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-current-medication',
  templateUrl: './current-medication.component.html',
  styleUrls: ['./current-medication.component.scss']
})
export class CurrentMedicationComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    public activatedRoute: ActivatedRoute,

    private alertService: AlertService,
    private medicationService: MedicationService
  ) { }
  medicationList: any;
  listMedication: any;
  dataSource: any;
  displayedColumns = [
    'Name',
    'Dose',
    'Frequency',
    'Duration',
    'Route',
    'Detail',
    'Purpose'
  ];

  name: string;
  dose: string;
  endDate: string;
  frequency: string;
  duration: string;
  route: string;
  detail: string;
  purpose: string;
  patientId: number;
  CurrentMedicationId: number;
  drugList: any;
  drugId: number;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));   
    this.getPatientById();
    this.getDrug();
  }

  getDrug(){
    this.medicationService.getDrug().subscribe(res => {
      this.drugList = res;
    });
  } 

  getPatientById() {
    this.medicationService.getPatientById(this.patientId).subscribe(res => {
      this.medicationList = res.filter(x => x.PatientId == this.patientId);
      console.log(this.medicationList);
       
    });
  }

  // getListMedication() {
  //   this.medicationService.list().subscribe(data => {
  //     this.listMedication = data;
  //     console.log('List Medication', this.listMedication);
  //   });
  // }

  private editedRowIndex: number;

  public editHandler({ sender, rowIndex, dataItem }) {
    console.log(dataItem);
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, dataItem);
  }

  public addHandler({ sender }, formInstance) {
    // close the previously edited item
    // formInstance.reset();
    this.closeEditor(sender);

    formInstance = new CurrentMedicationModel();
    formInstance.PatientId = this.patientId;
    sender.addRow(formInstance);
    // open a new item editor
    // sender.addRow(new Product());
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) {
      this.medicationService.create(dataItem).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Tạo thành công`
        });
        this.getPatientById();
      });
    }
    else {
      this.medicationService.update(dataItem, dataItem.PatientMedicalfactorDrugId).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Sửa thành công`
        });
        this.getPatientById();
      });
    }
    sender.closeRow(rowIndex);
    this.editedRowIndex = undefined;
  }

  public removeHandler(e) {
    console.log(e);
    this.medicationService.delete(e.dataItem.PatientMedicalfactorDrugId).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Xóa thành công`
      });
      this.getPatientById();
    });
  }
  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.editedRowIndex = undefined;
  }
  test() {
    console.log(
      '123'
    );

  }

}
