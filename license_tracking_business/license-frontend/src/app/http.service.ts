import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(url : any, data : any={}):Observable<any>{
    return this.http.post<any>(url,data);
  }

  get(url : any, data : any={}):Observable<any>{
    return this.http.get<any>(url,data);
  }


}
