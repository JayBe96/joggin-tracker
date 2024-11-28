import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/users';
  private loggedIn = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length > 0) {
            this.loggedIn = true;
            localStorage.setItem('loggedIn', 'true');
            return true;
          } else {
            return false;
          }
        }),
        catchError(() => of(false))
      );
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('loggedIn') === 'true';
  }
}
