import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseApiService } from '../../../shared/services/base.service';

import {ListofchargeModel} from "../models/ListofCharge.model"

import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ListofChargeService  extends BaseApiService<any>{
    [x: string]: any;
    constructor(public http: HttpClient){
        super(http, 'EMRPayment/api/ServiceCharge')
    }

    getInvoice(InvoiceId) {
        return this.http.get(`EMRPayment/api/ServiceCharge?InvoiceId=${InvoiceId}`).pipe(map((res: any) => res.Payload));
    }
    addInvoice(data) {
        return this.http.post(`EMRPayment/api/Invoice`, data);
      }
    updateInvoice(data) {
        return this.http.put(`EMRPayment/api/Invoice`, data);
      }
    deleteInvoice(data) {
        return this.http.delete(`EMRPayment/api/Invoice`, data);
      }
}
