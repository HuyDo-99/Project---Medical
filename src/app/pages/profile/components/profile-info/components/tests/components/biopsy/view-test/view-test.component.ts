import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.scss']
})
export class ViewTestComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog) { }
  listMedias: any;
  ngOnInit(): void {
    console.log("patientTestResultMedias", this.data.patientTestResultMedias);
    this.listMedias = this.data.patientTestResultMedias;
  }

}
