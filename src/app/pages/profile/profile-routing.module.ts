import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { InvoiceComponent } from "./components/profile-info/components/invoice/invoice.component";
import { VerifyComponent } from "./components/profile-info/components/invoice/components/verify/verify.component";
import { CreateInvoiceComponent } from "./components/profile-info/components/invoice/components/create-invoice/create-invoice.component";
import { MedicalBillComponent } from "./components/profile-info/components/invoice/components/medical-bill/medical-bill.component";
import { PrintComponent } from "./components/profile-info/components/invoice/components/print/print.component";
import { HistoryComponent } from "./components/profile-info/components/history/history.component";
import { TestsComponent } from "./components/profile-info/components/tests/tests.component";
import { AccountComponent } from "./components/profile-info/components/account/account.component";
import { MedicationComponent } from "./components/profile-info/components/medication/medication.component";
import { AllegryComponent } from "./components/profile-info/components/allegry/allegry.component";
import { VitalsComponent } from "./components/profile-info/components/vitals/vitals.component";
import { MessagesComponent } from "./components/profile-info/components/messages/messages.component";
import { ReportComponent } from "./components/profile-info/components/report/report.component";
import { PlanComponent } from "./components/profile-info/components/plan/plan.component";
import { DiagnosisComponent } from "./components/profile-info/components/diagnosis/diagnosis.component";
import { ProblemListComponent } from "./components/profile-info/components/problem-list/problem-list.component";
import { ExamComponent } from "./components/profile-info/components/exam/exam.component";
import { PersonalProfileComponent } from './components/profile-info/components/personal-profile/personal-profile.component';

const routes: Routes = [

  {
    path: 'detail/:patientId/invoice/verify',
    component: VerifyComponent
  },
  {
    path: 'detail/:patientId/exam',
    component: ExamComponent
  },
  {
    path: 'detail/:patientId/invoice',
    component: InvoiceComponent
  },
  {
    path: 'detail/:patientId/report',
    component: ReportComponent
  },
  {
    path: 'detail/:patientId/plan',
    component: PlanComponent
  },
  {
    path: 'detail/:patientId/allegry',
    component: AllegryComponent
  },
  {
    path: 'detail/:patientId/test',
    component: TestsComponent
  },
  {
    path: 'detail/:patientId/diagnosis',
    component: DiagnosisComponent
  },
  {
    path: 'detail/:patientId/message',
    component: MessagesComponent
  },
  {
    path: 'detail/:patientId/vital',
    component: VitalsComponent
  },
  {
    path: 'detail/:patientId/problem-list',
    component: ProblemListComponent
  },
  {
    path: 'detail/:patientId/medication',
    component: MedicationComponent
  },
  {
    path: 'detail/:patientId/account',
    component: AccountComponent
  },
  {
    path: 'invoice/medical-bill',
    component: MedicalBillComponent
  },
  {
    path: 'invoice/medical-bill/print',
    component: PrintComponent
  },
  // {
  //   path: 'detail/1',
  //   component: ProfileInfoComponent
  // },
  {
    path: 'detail/:patientId/profile-info',
    component: PersonalProfileComponent,
  },
  {
    path: 'detail/:patientId/history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
