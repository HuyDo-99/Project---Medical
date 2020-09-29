import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

import { BaseApiService } from "../../../shared/services/base.service";

import { PatientImmunizationscheduleModel } from "../models/PatientImmunizationschedule.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PatientImmunizationscheduleService extends BaseApiService<any> {
  constructor(public http: HttpClient) {
    super(http, "EMRPatient/api/PatientImmunizationschedule");
  }

  getImmuByPatientId(PatientId) {
    return this.http
      .get(`EMRPatient/api/PatientImmunizationschedule?PatientId=${PatientId}`)
      .pipe(map((res: any) => res.Payload));
  }
  addPatientImmunizationschedule(data) {
    return this.http.post(`EMRPatient/api/PatientImmunizationschedule`, data);
  }
  editImmuPatient(
    PatientImmunizationscheduleId,
    data
  ): Observable<PatientImmunizationscheduleModel> {
    return this.http.put<PatientImmunizationscheduleModel>(
      `EMRPatient/api/PatientImmunizationschedule/${PatientImmunizationscheduleId}`,
      data
    );
  }
  getAllPatient() {
    return this.http
      .get("EMRPatient/api/patient")
      .pipe(map((res: any) => res.Payload));
  }
  getPatientById(id) {
    return this.http
      .get(`EMRPatient/api/patient?PatientId=${id}`)
      .pipe(map((res: any) => res.Payload));
  }
  delImmuPatient(
    PatientImmunizationscheduleId
  ): Observable<PatientImmunizationscheduleModel> {
    return this.http.delete<PatientImmunizationscheduleModel>(
      `EMRPatient/api/PatientImmunizationschedule/${PatientImmunizationscheduleId}`
    );
  }
}
