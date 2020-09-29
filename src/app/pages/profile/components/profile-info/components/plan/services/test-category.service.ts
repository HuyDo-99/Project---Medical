import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseApiService } from "../../../../../../../shared/services/base.service";
//model


import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestCategoryService extends BaseApiService<any> {

 
  constructor(
    public http: HttpClient
  ) {
    super(http, 'EMRPatient/api/Testcategory');
  }
}
