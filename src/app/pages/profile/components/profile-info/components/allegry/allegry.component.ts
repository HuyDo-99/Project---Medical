import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
//models
import { PatientAllergyModel } from "../../../../models/Patient-allergy.model";
import { AllergyModel } from "../../../../models/allergy.model";
//services
import { AllergyService } from "../../../../services/allergy.service";
import { AlertService } from "../../../../../../shared/services/alert.service";
@Component({
  selector: 'app-allegry',
  templateUrl: './allegry.component.html',
  styleUrls: ['./allegry.component.scss']
})
export class AllegryComponent implements OnInit {
  @ViewChild('namesDropDown') private namesDdl;
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private allergyService: AllergyService
  ) { }

  private editedRowIndex: number;
  isShow: boolean = false;
  patientId: number;
  allergyPatientList: any;
  allergyList: any;
  dose: string;
  frequency: string;
  allergyId: 1;
  endDate: string;
  route: string;
  type: number;
  detail: string;
  purpose: string;
  status: number;
  duration: string;
  currentAllergy: any;
  names: any;
  showButton: boolean = false;
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
    this.getAllegryPatient();
    this.getAllergy();
  }
  editDataTable() {
    this.isShow = !this.isShow;
    // document.getElementById('cancel').click();
  }
 
  editButton() {
    this.showButton != this.showButton;
  }
  clickAdd(){
    this.isShow = !this.isShow;
    document.getElementById('add-button').click();
  }
  showCommand(){
    this.isShow = !this.isShow;

  }  
    
  getAllegryPatient(){
     this.allergyService.getAllegryPatient(this.patientId).subscribe(data => {
       this.allergyPatientList = data;  
     });
  }
    getAllergy(){
      this.allergyService.getAllegry().subscribe(res => {
        this.allergyList = res;
        console.log('danh sách dị ứng',this.allergyList);
      });
    }
  

  public editHandler({ sender, rowIndex, dataItem }) {

    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, dataItem); 
    console.log(dataItem);
  }

  public addHandler({ sender }, formInstance) {

    // close the previously edited item
    formInstance.reset();
    this.closeEditor(sender);
    formInstance = new PatientAllergyModel();
    formInstance.PatientId = this.patientId;
    sender.addRow(formInstance);
    console.log(formInstance);
  }
  
  public saveHandler({ sender, rowIndex, dataItem, isNew }) {          
    if(isNew){
      this.allergyService.create(dataItem).subscribe(res => {
      this.alertService.changeMessage({
          color: 'green',
          text: `Tạo thành công`
        });
        this.getAllegryPatient();
      });
    }
    else{    
       this.allergyService.update(dataItem, dataItem.PatientAllergyId ).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Sửa thành công`
      });
      this.getAllegryPatient();
    });
    }
   
    sender.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    // this.editedProduct = undefined;
  }
  
  public removeHandler(e) {
    console.log(e);
    this.allergyService.delete(e.dataItem.PatientAllergyId).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Xóa thành công`
      });
      this.getAllegryPatient();
    });
  }
  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
}
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    // this.editedProduct = undefined;
  }


}
