import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Run } from '../models/run.model';
import { Meditation } from '../models/meditation.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRuns(): Observable<Run[]> {
    return this.http.get<Run[]>(`${this.apiUrl}/runs`);
  }

  addRun(run: Run): Observable<Run> {
    return this.http.post<Run>(`${this.apiUrl}/runs`, run);
  }

  getMeditations(): Observable<Meditation[]> {
    return this.http.get<Meditation[]>(`${this.apiUrl}/meditations`);
  }

  addMeditation(meditation: Meditation): Observable<Meditation> {
    return this.http.post<Meditation>(`${this.apiUrl}/meditations`, meditation);
  }
}
