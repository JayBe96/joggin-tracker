import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private runsUrl = 'http://localhost:3000/runs';
  private meditationsUrl = 'http://localhost:3000/meditations';

  constructor(private http: HttpClient) {}

  addRun(run: any): Observable<any> {
    return this.http.post<any>(this.runsUrl, run);
  }

  addMeditation(meditation: any): Observable<any> {
    return this.http.post<any>(this.meditationsUrl, meditation);
  }
}
