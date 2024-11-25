import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRuns(): Observable<any> {
    return this.http.get(`${this.apiUrl}/runs`);
  }

  getMeditations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/meditations`);
  }
}
