import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  saveData(genrealFormObj): Observable<any> {
    return this.http.post('http://192.168.0.104:1024/api/aeoperations/addcase/', genrealFormObj);
  }

}
