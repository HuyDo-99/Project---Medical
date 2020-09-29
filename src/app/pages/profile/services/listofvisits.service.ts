import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseApiService } from '../../../shared/services/base.service';

import { ListofvisitsModel } from "../models/Listofvisits.model"

import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ListofvisitsService  extends BaseApiService<any>{
    constructor(public http: HttpClient){
        super(http, 'EMRPatient/api/Visit')
    }

    getVisit(listofvisitsId, data): Observable<ListofvisitsModel> {
        return this.http.put<ListofvisitsModel>(`EMRPatient/api/Visit/${listofvisitsId}`, data)
    }
}
