import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  // Méthode d'authentification
  authentification(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(environment.urlServeurBackEnd + 'login/', null,
      { params: { email, password } })
      .pipe(
        tap(data => {
          console.log(data);
          console.log('user id:' + data.id.toString());

          localStorage.setItem('user', JSON.stringify(data));
          catchError(this.handleError<User>('getUserByKey'));
        }));
  }

  // Méthode de déconnexion
  logout(): Observable<User> {
    return this.httpClient.get<User>(environment.urlServeurBackEnd + 'logout/'
    ).pipe(
      tap(data => {
        console.log(data);
        console.log('user id logout:' + data.id.toString());

        localStorage.clear(),
          catchError(this.handleError<User>('getUserByKey'));
      }));
  }

  // Méthode pour l'oubli du mot de passe
  forgotPassword(email: string): Observable<User> {
    return this.httpClient.post<User>(environment.urlServeurBackEnd + 'forgotpassword/', null,
      { params: { email } });
  }

  isLogged() {
    if (localStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }

  //  Handle Http operation that failed.
  //  Let the app continue.
  //  @param operation - name of the operation that failed
  //  @param result - optional value to return as the observable result
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (error);
    };
  }

}
