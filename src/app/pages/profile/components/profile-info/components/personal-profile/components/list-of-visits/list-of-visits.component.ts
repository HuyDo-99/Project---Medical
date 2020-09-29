import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from "../../../../../../../../shared/services/alert.service";
import { ActivatedRoute } from "@angular/router";
import { ListofvisitsModel } from "../../../../../../models/Listofvisits.model";
import { ListofvisitsService } from "../../../../../../services/listofvisits.service";
import { NumberValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-list-of-visits',
  templateUrl: './list-of-visits.component.html',
  styleUrls: ['./list-of-visits.component.scss']
})



export class ListOfVisitsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    public alertService: AlertService,
    public activatedRoute: ActivatedRoute,
    public listofvisitsService: ListofvisitsService
  ) { }
  displayedColumns = ['check', 'Date', 'Problem', 'Review']
  dataSource: any;
  Listofvisits: any;
  patientId: number;

  StartDate: string;
  Problem: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => this.patientId = +param.get('patientId'));
    // this.dataSource = new MatTableDataSource(this.PatientImmunizationschedules);
    this.getListOfVisit();
  }
  getListOfVisit() {
    this.listofvisitsService.list().subscribe(res => {
      this.Listofvisits = res.filter(x => x.PatientId == this.patientId);
      console.log('listofVisit: ', this.Listofvisits);

    });
  };

  private editedRowIndex: number;

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, dataItem); 
    console.log(dataItem);
  }

  public addHandler({ sender }, formInstance) {
    // close the previously edited item
    // formInstance.reset();
    this.closeEditor(sender);

    formInstance = new ListofvisitsModel();
    formInstance.PatientId = this.patientId;
    sender.addRow(formInstance);
    console.log("myForm", formInstance);

    // open a new item editor
    // sender.addRow(new Product());
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    console.log(sender);
    if (isNew) {
      this.listofvisitsService.create(dataItem).subscribe(res => {
        console.log(res);

        this.alertService.changeMessage({
          color: 'green',
          text: `Tạo thành công`
        });
        this.getListOfVisit();
      });
    }
    else {
      this.listofvisitsService.update(dataItem, dataItem.VisitId).subscribe(res => {
        this.alertService.changeMessage({
          color: 'green',
          text: `Sửa thành công`
        });
        this.getListOfVisit();
      });
    }

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
  }

  public removeHandler(e) {
    console.log(e);
    this.listofvisitsService.delete(e.dataItem.VisitId).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Xóa thành công`
      });
      this.getListOfVisit();
    });
  }
  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.editedRowIndex = undefined;
  }
}


