import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ProfileRoutingModule } from "./profile-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceComponent } from "./components/profile-info/components/invoice/invoice.component";
import { VerifyComponent } from "./components/profile-info/components/invoice/components/verify/verify.component";
import { TestsComponent } from "./components/profile-info/components/tests/tests.component";
import { CreateInvoiceComponent } from './components/profile-info/components/invoice/components/create-invoice/create-invoice.component';
import { MedicalBillComponent } from './components/profile-info/components/invoice/components/medical-bill/medical-bill.component';
import { PrintComponent } from './components/profile-info/components/invoice/components/print/print.component';
import { PersonalProfileComponent } from './components/profile-info/components/personal-profile/personal-profile.component';
import { DemographicsComponent } from './components/profile-info/components/personal-profile/components/demographics/demographics.component';
import { ListOfVisitsComponent } from './components/profile-info/components/personal-profile/components/list-of-visits/list-of-visits.component';
import { MedicationComponent } from './components/profile-info/components/medication/medication.component';
import { CurrentMedicationComponent } from './components/profile-info/components/medication/components/current-medication/current-medication.component';
import { MedicationHistoryComponent } from './components/profile-info/components/medication/components/medication-history/medication-history.component';
import { ProblemListComponent } from './components/profile-info/components/problem-list/problem-list.component';
import { AccountComponent } from './components/profile-info/components/account/account.component';
import { LabComponent } from './components/profile-info/components/tests/components/lab/lab.component';
import { BiopsyComponent } from './components/profile-info/components/tests/components/biopsy/biopsy.component';
import { FunctionalTestsComponent } from './components/profile-info/components/tests/components/functional-tests/functional-tests.component';
import { ImagingComponent } from './components/profile-info/components/tests/components/imaging/imaging.component';
import { InvoicesComponent } from './components/profile-info/components/account/invoices/invoices.component';
import { ContractsComponent } from './components/profile-info/components/account/contracts/contracts.component';
import { BillsComponent } from './components/profile-info/components/account/bills/bills.component';
import { SocialHistoryComponent } from './components/profile-info/components/personal-profile/components/social-history/social-history.component';
import { HistoryComponent } from './components/profile-info/components/history/history.component';
import { HighBloodPressureComponent } from './components/profile-info/components/history/high-blood-pressure/high-blood-pressure.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { MedicalHistoryComponent } from './components/profile-info/components/personal-profile/components/medical-history/medical-history.component';
import { FamilyHistoryComponent } from './components/profile-info/components/personal-profile/components/family-history/family-history.component';
import { ImmunizationComponent } from './components/profile-info/components/personal-profile/components/immunization/immunization.component';
import { AllegryComponent } from './components/profile-info/components/allegry/allegry.component';
import { VitalsComponent } from './components/profile-info/components/vitals/vitals.component';
import { MessagesComponent } from './components/profile-info/components/messages/messages.component';
import { DiagnosisComponent } from './components/profile-info/components/diagnosis/diagnosis.component';
import { PlanComponent } from './components/profile-info/components/plan/plan.component';
import { ReportComponent } from './components/profile-info/components/report/report.component';

import { ExamComponent } from './components/profile-info/components/exam/exam.component';
import { HighComponent } from './components/profile-info/components/exam/high/high.component';
import { CoughComponent } from './components/profile-info/components/exam/cough/cough.component';
import { PneumoniaComponent } from './components/profile-info/components/exam/pneumonia/pneumonia.component';
import { StomachacheComponent } from './components/profile-info/components/exam/stomachache/stomachache.component';
import { NeuroComponent } from './components/profile-info/components/exam/high/neuro/neuro.component';
import { CardioComponent } from './components/profile-info/components/exam/high/cardio/cardio.component';
import { PulmComponent } from './components/profile-info/components/exam/high/pulm/pulm.component';
import { HeartComponent } from './components/profile-info/components/exam/high/cardio/heart/heart.component';
import { ArteriesComponent } from './components/profile-info/components/exam/high/cardio/arteries/arteries.component';
import { CreateImmunizationComponent } from './components/profile-info/components/personal-profile/components/immunization/create-immunization/create-immunization.component';
import { TabRowMenuComponent } from './components/profile-info/tab-row-menu/tab-row-menu.component';
import { PlanHighBloodPressureComponent } from './components/profile-info/components/plan/components/plan-high-blood-pressure/plan-high-blood-pressure.component';
import { OrderTestsComponent } from './components/profile-info/components/plan/components/plan-high-blood-pressure/component/order-tests/order-tests.component';
import { HealthEducationComponent } from './components/profile-info/components/plan/components/plan-high-blood-pressure/component/health-education/health-education.component';
import { PrescriptionComponent } from './components/profile-info/components/plan/components/plan-high-blood-pressure/component/prescription/prescription.component';
import { FollowUpComponent } from './components/profile-info/components/plan/components/plan-high-blood-pressure/component/follow-up/follow-up.component';
import { DiagnosisHighBloodPressureComponent } from './components/profile-info/components/diagnosis/components/diagnosis-high-blood-pressure/diagnosis-high-blood-pressure.component';

import { ViewTestComponent } from './components/profile-info/components/tests/components/biopsy/view-test/view-test.component';

@NgModule({
  declarations: [
    TestsComponent,
    InvoiceComponent,
    VerifyComponent,
    CreateInvoiceComponent,
    MedicalBillComponent,
    PrintComponent,
    PersonalProfileComponent,
    DemographicsComponent,
    ListOfVisitsComponent,
    MedicationComponent,
    CurrentMedicationComponent,
    MedicationHistoryComponent,
    ProblemListComponent,
    AccountComponent,
    LabComponent,
    BiopsyComponent,
    FunctionalTestsComponent,
    ImagingComponent,
    InvoicesComponent,
    ContractsComponent,
    BillsComponent,
    SocialHistoryComponent,
    MedicalHistoryComponent,
    FamilyHistoryComponent,
    ImmunizationComponent,
    AllegryComponent,
    VitalsComponent,
    MessagesComponent,
    DiagnosisComponent,
    PlanComponent,
    ReportComponent,
    SocialHistoryComponent,
    HistoryComponent,
    HighBloodPressureComponent,
    ExamComponent,
    HighComponent,
    CoughComponent,
    PneumoniaComponent,
    StomachacheComponent,
    NeuroComponent,
    CardioComponent,
    PulmComponent,
    HeartComponent,
    ArteriesComponent,
    CreateImmunizationComponent,
    SocialHistoryComponent,
    HistoryComponent,
    HighBloodPressureComponent,
    TabRowMenuComponent,
    ArteriesComponent,
    PlanHighBloodPressureComponent,
    OrderTestsComponent,
    HealthEducationComponent,
    PrescriptionComponent,
    FollowUpComponent,
    DiagnosisHighBloodPressureComponent,
    ViewTestComponent

  ],
  imports: [CommonModule, ProfileRoutingModule, SharedModule, MatTableModule, NgbModule, ButtonsModule, GridModule, MatSelectModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ProfileModule {
}
