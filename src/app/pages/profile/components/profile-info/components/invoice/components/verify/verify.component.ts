import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route } from '@angular/compiler/src/core';
import { ServiceInvoiceModel } from "../../../../../../models/service-invoice.model";
import { MedicationInvoiceModel } from "../../../../../../models/medication-invoice.model";
import { ServiceInvoiceService } from "../../../../../../services/service-invoice.service";
import { MedicationInvoiceService } from "../../../../../../services/medication-invoice.service";
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public alertService: AlertService,
    public ActivatedRoute: ActivatedRoute,
    public ServiceInvoiceService: ServiceInvoiceService,
    public MedicationInvoiceService: MedicationInvoiceService
  ) { }

  displayedColumnsServices = [
    'No.',
    'Description',
    'Quantity',
    'Unit cost',
    'Tax',
    'Discount',
    'Amount'
  ];

  displayedColumnsMedication = [
    'No.',
    'Name',
    'SKU',
    'Quantity',
    'Unit cost',
    'Tax',
    'Discount',
    'Amount'
  ];

  dataSource: any;
  patientId: number;
  isShow: boolean = false
  InvoiceId: number;
  Medication: number;
  serviceInvoice: any;
  MedicationInvoice: any;
  Description: string;
  SKU: string;
  Quantity: number;
  Discount: number;
  Name: string;
  Unitcost: number;
  Tax: number;
  amountArr = [];
  amountArrMedication = [];
  totalArr = [];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
    this.getInvoiceById()
    this.getMedicationbyId();
  }

  getInvoiceById() {
    let count: number = 0;
    this.ServiceInvoiceService.getInvoice(this.InvoiceId).subscribe(res => {
      this.serviceInvoice = res;
      // this.dataSource = new MatTableDataSource(this.PatientImmunizationschedules);
      console.log('InvoiceById', res);
      for (let i = 0; i < this.serviceInvoice.length; i++) {
        count += this.serviceInvoice[i].Price;
      }
      let amount = { "Count": count };
      this.amountArr.push(amount);
    });
  }

  getMedicationbyId() {
    let count: number = 0;
    this.MedicationInvoiceService.getMedication(this.InvoiceId).subscribe(res => {
      this.MedicationInvoice = res;
      // this.dataSource = new MatTableDataSource(this.PatientImmunizationschedules);
      console.log("MedicationInvoice", this.MedicationInvoice);
      for (let i = 0; i < this.MedicationInvoice.length; i++) {
        count += this.MedicationInvoice[i].Price;
      }
      let price = { "Count": count };
      this.amountArrMedication.shift();
      this.amountArrMedication.push(price);
      let total = { "Total": this.amountArrMedication[0].Count + this.amountArr[0].Count };
      this.totalArr.shift();
      this.totalArr.push(total);
    });
  }
  showCommand() {
    this.isShow = !this.isShow;
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
    formInstance = new ServiceInvoiceModel();
    formInstance.DrugpriceId = 1;
    sender.addRow(formInstance);
    console.log("myForm", formInstance);

    // open a new item editor
    // sender.addRow(new Product());
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) {
      this.MedicationInvoiceService.create(dataItem).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Tạo thành công`
        });
        this.getMedicationbyId();
      });
    }
    else {
      this.MedicationInvoiceService.update(dataItem, dataItem.DrugChargeId).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Sửa thành công`
        });
        this.getMedicationbyId();
      });
    }

    sender.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.editedProduct = undefined;
  }

  public removeHandler(e) {
    console.log(e);
    this.MedicationInvoiceService.delete(e.dataItem.DrugChargeId).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Xóa thành công`
      });
      this.getMedicationbyId()
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
