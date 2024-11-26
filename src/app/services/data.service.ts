import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Run } from '../models/run.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRuns(): Observable<Run[]> {
    return this.http.get<Run[]>(`${this.apiUrl}/runs`);
  }

  getMeditations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/meditations`);
  }

  deleteRun(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/runs/${id}`);
  }

  updateRun(run: Run): Observable<Run> {
    return this.http.put<Run>(`${this.apiUrl}/runs/${run.id}`, run);
  }
}
