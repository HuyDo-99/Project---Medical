import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ProblemModel } from '../models/problem.model';
import { BaseApiService } from '../../../shared/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProblemService extends BaseApiService<ProblemModel>{
    constructor(public http: HttpClient){
        super(http, 'EMRPatient/api/Problem')
    }

    getProblemsByPatientId(patientId): Observable<ProblemModel> {
        return this.http.get<ProblemModel>(`EMRPatient/api/PatientProblem?PatientId=${patientId}`).pipe(map((res: any) => res.Payload.reverse()));
    }
    createProblemPatient(model):Observable<ProblemModel> {
        return this.http.post<ProblemModel>('EMRPatient/api/PatientProblem', model).pipe(map((res: any) => res.Payload));
    }
    updateProblemPatient(patientProblemId: number, model: any): Observable<ProblemModel> {
        return this.http.put<ProblemModel>(`EMRPatient/api/PatientProblem/${patientProblemId}`, model).pipe(map((res: any) => res.Payload));
    }
}