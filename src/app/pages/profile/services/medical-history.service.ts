import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseApiService } from '../../../shared/services/base.service';
import { MedicalHistoryModel } from '../models/medical-history.model'
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class MedicalHistoryService extends BaseApiService<any>{
    constructor(public http: HttpClient) {
        super(http, 'EMRPatient/api/PatientMedicalfactor')
    }

    getPatientMedical(patientId) {
        return this.http.get(`EMRPatient/api/PatientMedicalfactor?PatientId=${patientId}`).pipe(map((res: any) => res.Payload));
    }
    putPatientMedical(patientMedicalfactorId, data): Observable<MedicalHistoryModel> {
        return this.http.put<MedicalHistoryModel>(`EMRPatient/api/PatientMedicalfactor/${patientMedicalfactorId}`, data)
    }
    
}