import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from "@angular/router";
import { CreateImmunizationComponent } from "./create-immunization/create-immunization.component";
import { PatientImmunizationscheduleModel } from '../../../../../../models/PatientImmunizationschedule.model';
//service

import { PatientImmunizationscheduleService } from '../../../../../../services/patientImmunizationschedule.service';
import { AlertService } from "../../../../../../../../shared/services/alert.service";
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: "app-immunization",
  templateUrl: "./immunization.component.html",
  styleUrls: ["./immunization.component.scss"],
})
export class ImmunizationComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    public alertService: AlertService,
    public activatedRoute: ActivatedRoute,
    public immunizationService: PatientImmunizationscheduleService
  ) { }
  displayedColumns = ["vaccines", "type", "date"];
  dataSource: any;

  PatientImmunizationschedules: any;
  showButton: boolean = false;
  isShow: boolean = false
  isReadonly = true;
  patientImmunizationscheduleId: number;
  patientId: number;
  vaccine: string;
  type: number;
  date: string;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
    // this.dataSource = new MatTableDataSource(this.PatientImmunizationschedules);
    this.getImmuById()
  }

  showEdit(){
     this.isShow = !this.isShow;
  }
  
  clickAdd() {
    document.getElementById('add-button').click();
    this.isShow = !this.isShow;
  }

  closeEditTable() {
    this.isShow = !this.isShow;
    document.getElementById('cancel').click();
  }

  editButton() {
    this.showButton != this.showButton;
  }

  getImmuById() {
    this.immunizationService.getImmuByPatientId(this.patientId).subscribe(res => {
      this.PatientImmunizationschedules = res;
      // this.dataSource = new MatTableDataSource(this.PatientImmunizationschedules);
      console.log(res);
    })
  }
 
  private editedRowIndex: number;
  private editedProduct: any;

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, dataItem);
  }

  public addHandler({ sender }, formInstance) {
    // close the previously edited item
    // formInstance.reset();
    this.closeEditor(sender);

    formInstance = new PatientImmunizationscheduleModel();
    formInstance.PatientId = this.patientId;
    sender.addRow(formInstance);
    console.log("myForm", formInstance);

    // open a new item editor
    // sender.addRow(new Product());
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) {
      this.immunizationService.create(dataItem).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Tạo thành công`
        });
        this.getImmuById();
      });
    }
    else {
      this.immunizationService.update(dataItem, dataItem.PatientImmunizationscheduleId).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Sửa thành công`
        });
        this.getImmuById();
      });
    }

    sender.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.editedProduct = undefined;
  }

  public removeHandler(e) {
    console.log(e);
    this.immunizationService.delete(e.dataItem.PatientImmunizationscheduleId).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Xóa thành công`
      });
      this.getImmuById();
    });
  }
  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.editedProduct = undefined;
  }
}
