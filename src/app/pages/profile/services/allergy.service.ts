import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PatientAllergyModel } from "../models/Patient-allergy.model";
import { AllergyModel } from "../models/allergy.model";
import { BaseApiService } from '../../../shared/services/base.service';
import { Observable } from "rxjs";
import { AlertService } from 'src/app/shared/services/alert.service';


@Injectable({
    providedIn: 'root'
})
export class AllergyService extends BaseApiService<any>{
    constructor(public http: HttpClient){
        super(http, 'EMRPatient/api/PatientAllergy')
    }
    getAllegryPatient(patientId: number): Observable<PatientAllergyModel> {
        return this.http.get<PatientAllergyModel>(`EMRPatient/api/PatientAllergy?PatientId=${patientId}`).pipe(map((res: any) => res.Payload.reverse()));
    }
    getAllegry(){
        return this.http.get('EMRPatient/api/Allergy').pipe(map((res: any) => res.Payload));
    }
}