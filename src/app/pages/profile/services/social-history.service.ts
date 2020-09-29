import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseApiService } from '../../../shared/services/base.service';

import { SocialHistoryModel } from "../models/social-history.model"

import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SocialHistoryService extends BaseApiService<any>{
    constructor(public http: HttpClient) {
        super(http, 'emrpatient/api/PatientSocialfactor')
    }

    getSocialHistoryByPatientId(patientId): Observable<SocialHistoryModel> {
        return this.http.get<SocialHistoryModel>(`emrpatient/api/PatientSocialfactor?patientId=${patientId}`).pipe(map((res: any) => res.Payload.reverse()));
    }

    updateSocialHistory(patientId: number, data: any): Observable<SocialHistoryModel> {
        return this.http.put<SocialHistoryModel>(`emrpatient/api/PatientSocialfactor/${patientId}`, data).pipe(map((res: any) => res.Payload));
    }
}
