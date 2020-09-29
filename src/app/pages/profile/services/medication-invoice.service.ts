import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseApiService } from '../../../shared/services/base.service';

import { MedicationInvoiceModel } from "../models/medication-invoice.model";

import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class MedicationInvoiceService  extends BaseApiService<any>{
    [x: string]: any;
    constructor(public http: HttpClient){
        super(http, 'EMRPayment/api/DrugCharge')
    }

    getMedication(InvoiceId) {
        return this.http.get(`EMRPayment/api/DrugCharge?InvoiceId=${InvoiceId}`).pipe(map((res: any) => res.Payload));
    }
    createMedication(data) {
        return this.http.post(`EMRPayment/api/DrugCharge`, data);
    }
    updateMedication(data) {
        return this.http.put(`EMRPayment/api/DrugCharge`, data);
    }
    deleteMedication(data) {
        return this.http.delete(`EMRPayment/api/DrugCharge`, data);
    }
}
