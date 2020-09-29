import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseApiService } from '../../../shared/services/base.service';
import { FamilyHistoryModel } from '../models/family-history.model'
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class FamilyHistoryService extends BaseApiService<any>{
    constructor(public http: HttpClient) {
        super(http, 'EMRPatient/api/PatientFamilyfactor')
    }

    getFamilyHistory(patientId) {
        return this.http.get(`EMRPatient/api/PatientFamilyfactor?PatientId=${patientId}`).pipe(map((res: any) => res.Payload));
    }
    putFamilyHistory(PatientFamilyfactor, data): Observable<FamilyHistoryModel> {
        return this.http.put<FamilyHistoryModel>(`EMRPatient/api/PatientFamilyfactor/${PatientFamilyfactor}`, data)
    }
}