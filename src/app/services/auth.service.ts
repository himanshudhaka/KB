import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Access-Control-Allow-Credentials': 'true',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://hmaapi.kilobytetech.com';
  private userSubject: BehaviorSubject<any | null> = new BehaviorSubject<
    any | null
  >(null);
  public user: Observable<any | null>;
  get user$() {
    return this.userSubject.value;
  }

  constructor(private router: Router, private http: HttpClient) {
    if (localStorage.getItem('user')) {
      this.userSubject = new BehaviorSubject(
        JSON.parse(localStorage.getItem('user')!)
      );
    }
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value.token;
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl}/auth/login`,
        {
          email,
          password,
        },
        httpOptions
      )
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}
