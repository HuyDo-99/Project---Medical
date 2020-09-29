import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { AlertService } from "../../../../../../shared/services/alert.service";
import { ProblemService } from '../../../../services/problem.service';
import { TabMenuService } from "../../../../../../shared/services/tabMenu.service";
import { PatientImmunizationscheduleService } from "../../../../services/patientImmunizationschedule.service";
import { ProblemModel } from "../../../../models/problem.model";
import { PatientModel } from 'src/app/pages/clients/models/patient.model';
@Component({
  selector: "app-problem-list",
  templateUrl: "./problem-list.component.html",
  styleUrls: ["./problem-list.component.scss"],
})
export class ProblemListComponent implements OnInit {
  constructor(
    private alertService: AlertService,
    private data: TabMenuService,
    private patientService: PatientImmunizationscheduleService,
    private problemService: ProblemService,
    private activatedRoute: ActivatedRoute,
  ) { }

  patientId: number;
  problemId: number;
  problemList: any;
  btnStyle: boolean = true;
  description: string;
  allProblemList: any;
  name: string;
  status: number;
  patientInfo: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(pram => this.patientId = +pram.get('patientId'));
    this.getCurrentProblem();
    this.getAllProblem();
    this.getInfoPatient();
  }
  
  sentMessage() {
    this.data.changeMessage(true);
    this.data.changeMessage(this.patientId);
  };

getInfoPatient(){
  this.patientService.getPatientById(this.patientId).subscribe( res => {
    this.patientInfo  = res.find(x => x.PatientId == this.patientId);
  });
}

  changeStyle() {
    this.btnStyle = !this.btnStyle;
  }

  getAllProblem() {
    this.problemService.list().subscribe(data => {
      this.allProblemList = data;
    });
  }

  createProblem() {
    let problem = new ProblemModel;
    problem.PatientId = this.patientId;
    problem.ProblemId = this.problemId;
    this.problemService.createProblemPatient(problem).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Tạo thành công!`
      });
      this.getCurrentProblem();
    });
  }

  updateProblemPatient(status: number, patientProblemId: number) {
    let data = new ProblemModel();
    data.Status = status;
    data.Type = 1;
    this.problemService.updateProblemPatient(patientProblemId, data).subscribe(res => {
      this.alertService.changeMessage({
        color: 'green',
        text: `Cập nhật thành công!`
      });
      this.getCurrentProblem();
    });
  }

  getCurrentProblem() {
    this.problemService.getProblemsByPatientId(this.patientId).subscribe(data => {
      this.problemList = data;
    });
  }
}
