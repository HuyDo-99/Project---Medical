import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MedicalHistoryService } from '../../../../../../services/medical-history.service';
import { MedicalHistoryModel } from '../../../../../../models/medical-history.model';
import { AlertService } from "../../../../../../../../shared/services/alert.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(public medicalHistoryService: MedicalHistoryService,
    public alertService: AlertService,
    private activatedRoute: ActivatedRoute,
  ) { }
  displayedColumns = ['medical', 'since']
  dataSource: any;
  surgicalDataSource: any;
  surgicalDisplayedColumns = ['surgical', 'date']
  patientId: any;
  medicalHistory: any;
  surgicalHistory: any;
  medical: any;
  surgical: any;
  editField: string;
  SNOMEDCode: string;
  StartDate: string;
  EndDate: string;
  Type: number;
  Status: number;
  private editedRowIndex: number;
  private editedProduct: any;

  isReadonly = true;
  change=true;
  // editDataTable() {
  //   this.isReadonly = true;
  // }
  editAll() {
    this.change = !this.change;
    document.getElementById("edit-medical").addEventListener("click",function(){ alert("Hello World!"); }); 
    // let focus = document.createAttribute("autofocus");
    // btn.setAttributeNode(focus);
    // console.log('success');
    
  }


  saveAll() {
    this.change = !this.change;
  }

  createMedical() {
    document.getElementById('add-medical').click();
  };
  createSurgical() {
    document.getElementById('add-surgical').click();
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
    this.getMedical();
  }

  getMedical() {
    this.medicalHistoryService.getPatientMedical(this.patientId).subscribe(data => {
      this.medicalHistory = data;
      this.medical = this.medicalHistory.filter(res => res.Type == 1);
      this.dataSource = this.medical;
      console.log("medical", this.medical);

      this.surgical = this.medicalHistory.filter(res => res.Type == 2);
      this.surgicalDataSource = this.surgical;
      console.log("surgical", this.surgical);

      console.log("medicalHistory", this.medicalHistory);

    })
  }
  public editHandler({ sender, rowIndex, dataItem }) {
    
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, dataItem);
  }

  public addHandlerMedical({ sender }, formInstance) {
    // close the previously edited item
    // formInstance.reset();
    this.closeEditor(sender);

    formInstance = new MedicalHistoryModel();
    formInstance.PatientId = this.patientId;
    sender.addRow(formInstance);
    console.log("myForm", formInstance);

    // open a new item editor
    // sender.addRow(new Product());
  }
  public addHandlerSurgical({ sender }, formInstance) {
    // close the previously edited item
    // formInstance.reset();
    this.closeEditor(sender);

    formInstance = new MedicalHistoryModel();
    formInstance.PatientId = this.patientId;
    formInstance.SNOMEDCode = this.SNOMEDCode;
    formInstance.StartDate = this.StartDate;
    formInstance.EndDate = '';
    formInstance.Type = 2;
    formInstance.Status = 1;
    sender.addRow(formInstance);
    console.log("myForm", formInstance);

    // open a new item editor
    // sender.addRow(new Product());
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    console.log(sender);
    console.log("dataItem", dataItem);

    if (isNew) {
      this.medicalHistoryService.create(dataItem).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Tạo thành công`
        });
        this.getMedical();
      });
    }
    else {
      this.medicalHistoryService.putPatientMedical(dataItem.PatientMedicalfactorId, dataItem).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Sửa thành công`
        });
        this.getMedical();
      });
    }

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedProduct = undefined;
  }

  public removeHandler(e) {
    console.log(e);
    this.medicalHistoryService.delete(e.dataItem.PatientMedicalfactorId).subscribe(res => {
      console.log(e.dataItem);

      this.alertService.changeMessage({
        color: 'green',
        text: `Xóa thành công`
      });
      this.getMedical();
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
  // updateList(patientId: number, property: string, event: any) {
  //   const editField = event.target.textContent;
  //   this.medicalHistory[patientId][property] = editField;

  //   this.dataSource = new MatTableDataSource(this.medicalHistory);
  //   console.log('medicalHis', this.medicalHistory);
  // }
  // changeValue(patientId: number, property: string, event: any) {
  //   this.editField = event.target.textContent;
  // }
}
