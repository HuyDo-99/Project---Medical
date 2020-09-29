import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"],
})
export class InvoicesComponent implements OnInit {
  constructor() {}
  dataSource: any;
  data = [
    {
      No: "1",
      problem: "Headache, somachache",
      Date: "20/03/2020",
      Amount: "15.000.000 VND",
      Unpaid: "1.200.000 VND",
      Pay: "1.200.000 USD"
    },
    {
      No: "2",
      problem: "Headache, somachache",
      Date: "20/03/2020",
      Amount: "15.000.000 VND",
      Unpaid: "1.200.000 VND",
      Pay: "1.200.000 USD"
    },
    {
      No: "3",
      problem: "Headache, somachache",
      Date: "20/03/2020",
      Amount: "15.000.000 VND",
      Unpaid: "1.200.000 VND",
      Pay: "1.200.000 USD"
    },
    {
      No: "4",
      problem: "Headache, somachache",
      Date: "20/03/2020",
      Amount: "15.000.000 VND",
      Unpaid: "1.200.000 VND",
      Pay: "1.200.000 USD"
    },
    {
      No: "5",
      problem: "Headache, somachache",
      Date: "20/03/2020",
      Amount: "15.000.000 VND",
      Unpaid: "1.200.000 VND",
      Pay: "1.200.000 USD"
    },
  ];

  displayedColumns = ["check", "No.", "Date", "Amount", "Unpaid"];
  displayedColumnsData = ["Invoice"];
  displayedColumnsPay = ["Pay"];
  id: number;
  arr = [];
  check: boolean = false;
  showRowTable: boolean = false;
  isSelect: boolean = false;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  showPay() {
    this.check = !this.check;
  }
  
  selectAll(){
     this.isSelect = !this.isSelect;
  }

  showInput(){
    this.showRowTable = !this.showRowTable;
  }
}
