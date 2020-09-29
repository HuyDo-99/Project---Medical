import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseApiService } from '../../../../../../../shared/services/base.service';
import {CurrentMedicationModel  } from "../models/currentmedication.model";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MedicationService extends BaseApiService<any>{
    constructor(public http: HttpClient){
        super(http, 'EMRPatient/api/PatientMedicalfactorDrug')
    }


    getPatientById(patientId: number) {
        return this.http.get(`EMRPatient/api/PatientMedicalfactorDrug?PatientId=${patientId}`).pipe(map((res: any) => res.Payload));
    } 
    editImmuPatient(data): Observable<CurrentMedicationModel> {
        return this.http.post<CurrentMedicationModel>('EMRPatient/api/PatientImmunizationschedule', data).pipe(map((res: any) => res.Payload));
    }
    getDrug(){
        return this.http.get('EMRPatient/api/Drug').pipe(map((res: any) => res.Payload));
    }
}