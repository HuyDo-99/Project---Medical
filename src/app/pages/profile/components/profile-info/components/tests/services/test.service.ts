import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseApiService } from "../../../../../../../shared/services/base.service";
//model
import { TestModel } from "../model/test.model";

import { Observable } from "rxjs";

@Injectable({

  providedIn: 'root'
})
export class TestService extends BaseApiService<any> {

  constructor(
    public http: HttpClient
  ) {
    super(http, 'EMRPatient/api/PatientTestResult');
  }

  getTestList(): Observable<TestModel> {
    return this.http.get<TestModel>(`EMRPatient/api/Testcategory`).pipe(map((res: any) => res.Payload));
  }
  getAllPackage() {
    return this.http.get('EMRPatient/api/Package?TestcategoryId').pipe(map((res: any) => res.Payload));
  }
  getPackagesDetail(patientId, testId, packagesId, testCategoryId): Observable<TestModel> {
    return this.http.get<TestModel>(`EMRPatient/api/PatientTestResult?PatientId=${patientId}&TestId=${testId}&PackageId=${packagesId}&TestcategoryId=${testCategoryId}`).pipe(map((res: any) => res.Payload));
  }
  getListTest() {
    return this.http.get('EMRPatient/api/Test?TestId=null&PackageId=null&TestcategoryId=null').pipe(map((res: any) => res.Payload));
  }
  deleteTest(testId: number) {
    return this.http.delete(`EMRPatient/api/PatientTestResult/${testId}`).pipe(map((res: any) => res.Payload));
  }
  updatePatientTestResult(data): Observable<TestModel>{
      return this.http.put<TestModel>(`EMRPatient/api/PatientTestResult`, data).pipe(map((res: any) => res.Payload));
  }
  getPatientTestResultMediaBiopsy(patientId,packageId,testCategoryId){
    return this.http.get(`EMRPatient/api/PatientTestResultMedia?PatientId=${patientId}&PackageId=${packageId}&TestcategoryId=${testCategoryId}`).pipe(map((res: any) => res.Payload));
  }
}
