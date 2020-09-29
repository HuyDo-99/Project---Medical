import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import {ListofchargeModel} from '../../../../models/ListofCharge.model';
import {ListofChargeService} from "../../../../services/listofcharge.service";
import { NumberValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    public alertService: AlertService,
    public activatedRoute: ActivatedRoute,
    public listofchargeService: ListofChargeService
  ) { }
  isShow: boolean = false
  displayedColumns = [
    'select',
    'Category',
    'Description',
    'SKU',
    'Quantity',
    'Discount'
  ];
  InvoiceId : number;
  Listofcharge: any;
  Description: string;
  SKU: string;
  Quantity: number;
  Discount: number;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.InvoiceId = +param.get('patientId'));
    // this.dataSource = new MatTableDataSource(this.PatientImmunizationschedules);
    this.getInvoiceById();
  }

  getInvoiceById() {
    this.listofchargeService.getInvoice(this.InvoiceId).subscribe(res => {
      this.Listofcharge = res;
      // this.dataSource = new MatTableDataSource(this.PatientImmunizationschedules);
      console.log("ListofCharge",res);
    })
  }
  showCommand(){
    this.isShow = !this.isShow;
  }  
  private editedRowIndex: number;
  private editedProduct: any;

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, dataItem);
  }

  public addHandler({ sender },  formInstance) {
    // close the previously edited item
    // formInstance.reset();
    this.closeEditor(sender);

    formInstance = new ListofchargeModel();
    formInstance.InvoiceId = this.InvoiceId;
    sender.addRow(formInstance);
    console.log("myForm",formInstance);
    
    // open a new item editor
    // sender.addRow(new Product());
  }
  
  public saveHandler({ sender, rowIndex, dataItem, isNew }) {    
    if(isNew){
      this.listofchargeService.create(dataItem).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Tạo thành công`
        });
        this.getInvoiceById();
      });
    }
    else{
       this.listofchargeService.update(dataItem, dataItem.InvoiceId).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Sửa thành công`
      });
      this.getInvoiceById();
    });
    }
   
    sender.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.editedProduct = undefined;
  }
  
  public removeHandler(e) {
    console.log(e);
    this.listofchargeService.delete(e.dataItem.InvoiceId).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Xóa thành công`
      });
      this.getInvoiceById();
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
