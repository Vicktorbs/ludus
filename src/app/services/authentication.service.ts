import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject   } from 'rxjs';

@Injectable()
export class AuthenticationService {
  AUTH_SERVER: string = 'http://localhost:3000';
  authsubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`,
      user).pipe(tap(
        (res: JwtResponse) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }
  login(user: User): Observable<JwtResponse> {
    console.log('en funcion ', user);
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/loging`, user).pipe(tap(
      (res: JwtResponse) => {

        console.log('sending ', user);
        if (res) {
          // guardar token 
          console.log(res.dataUser);
          
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
