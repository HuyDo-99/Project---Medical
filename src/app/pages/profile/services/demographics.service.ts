import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseApiService } from '../../../shared/services/base.service';



@Injectable({
    providedIn: 'root'
})
export class DemographicsService extends BaseApiService<any>{
    constructor(public http: HttpClient){
        super(http,'EMRPatient/api/patient')
    }

    getAllPatient() {
        return this.http.get("EMRPatient/api/patient").pipe(map((res: any) => res.Payload));
    }
    getPatientById(id) {
        return this.http.get(`EMRPatient/api/patient?PatientId=${id}`).pipe(map((res: any) => res.Payload));
    }
    
}