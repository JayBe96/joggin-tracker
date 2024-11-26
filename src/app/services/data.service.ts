import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Run } from '../models/run.model';
import { Meditation } from '../models/meditation.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRuns(): Observable<Run[]> {
    return this.http.get<Run[]>(`${this.apiUrl}/runs`);
  }

  getMeditations(): Observable<Meditation[]> {
    return this.http.get<Meditation[]>(`${this.apiUrl}/meditations`);
  }

  deleteRun(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/runs/${id}`);
  }

  updateRun(run: Run): Observable<Run> {
    return this.http.put<Run>(`${this.apiUrl}/runs/${run.id}`, run);
  }

  addMeditation(meditation: Meditation): Observable<Meditation> {
    return this.http.post<Meditation>(`${this.apiUrl}/meditations`, meditation);
  }

  updateMeditation(meditation: Meditation): Observable<Meditation> {
    return this.http.put<Meditation>(`${this.apiUrl}/meditations/${meditation.id}`, meditation);
  }

  deleteMeditation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/meditations/${id}`);
  }
}
