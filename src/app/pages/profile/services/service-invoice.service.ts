import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BaseApiService } from '../../../shared/services/base.service';

import { ServiceInvoiceModel} from "../models/service-invoice.model";

import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ServiceInvoiceService  extends BaseApiService<any>{
    [x: string]: any;
    constructor(public http: HttpClient){
        super(http, 'EMRPayment/api/ServiceCharge')
    }

    getInvoice(InvoiceId) {
        return this.http.get(`EMRPayment/api/ServiceCharge?InvoiceId=${InvoiceId}`).pipe(map((res: any) => res.Payload));
    }
}
