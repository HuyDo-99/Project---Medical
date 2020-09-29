import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { FamilyHistoryService } from '../../../../../../services/family-history.service';
import { FamilyHistoryModel } from '../../../../../../models/family-history.model';
import { AlertService } from "../../../../../../../../shared/services/alert.service";

@Component({
  selector: 'app-family-history',
  templateUrl: './family-history.component.html',
  styleUrls: ['./family-history.component.scss']
})
export class FamilyHistoryComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private activatedRoute: ActivatedRoute,
    public familyHistoryService: FamilyHistoryService,
    public alertService: AlertService,
  ) { }
  displayedColumns = ['relationship', 'name', 'since',]
  dataSource: any;
  family: any;
  editField: string;
  patientId: any;
  SNOMEDCode: string;
  StartDate: string;
  EndDate: string;
  Type: number;
  Status: number;
  private editedRowIndex: number;
  private editedProduct: any;
  change=true;
  isShow : boolean = false;
  isShowEditButton: boolean = false;
 
  showEditButton(){
   this.isShowEditButton = !this.isShowEditButton;
  }

  editDataTable() {
    this.isShow = !this.isShow;
    this.change = !this.change;
  }
  editAll() {
    this.change = !this.change;
    // document.getElementById("add-family").addEventListener("click",function(){ alert("Hello World!"); }); 
    // let focus = document.createAttribute("autofocus");
    // btn.setAttributeNode(focus);
    // console.log('success');
  }
  closeEditTable(){
    document.getElementById('cancel').click();
    this.isShow = !this.isShow;
    this.change = !this.change;
  }
  // saveAll() {
  //   this.change = !this.change;
  // }

  createFamily() {
    document.getElementById('add-family').click();
    this.isShow = !this.isShow;
    this.change = !this.change;

  };
 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
    this.getFamilyHistory();
  }

  getFamilyHistory() {
    this.familyHistoryService.getFamilyHistory(this.patientId).subscribe(data => {
      this.family = data;
      this.dataSource = this.family;
      console.log("family", this.family);
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

    formInstance = new FamilyHistoryModel();
    formInstance.PatientId = this.patientId;
    formInstance.SNOMEDCode = this.SNOMEDCode;
    formInstance.StartDate = this.StartDate;
    formInstance.EndDate = '';
    formInstance.Type = 1;
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
      this.familyHistoryService.create(dataItem).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Tạo thành công`
        });
        this.getFamilyHistory();
      });
    }
    else {
      this.familyHistoryService.putFamilyHistory(dataItem.PatientFamilyfactorId, dataItem).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Sửa thành công`
        });
        this.getFamilyHistory();
      });
    }

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedProduct = undefined;
  }
  public removeHandler(e) {
    console.log(e);
    this.familyHistoryService.delete(e.dataItem.PatientFamilyfactorId).subscribe(res => {
      console.log(e.dataItem);

      this.alertService.changeMessage({
        color: 'green',
        text: `Xóa thành công`
      });
      this.getFamilyHistory();
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

