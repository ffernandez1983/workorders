import { Injectable } from '@angular/core';
import { User } from '../_model/user'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private URL_LOGIN= "http://localhost:3000/login"

  constructor(private http:HttpClient) { }

//How to consume
// this.loginService.postLogin(user)
// .subscribe(user =>  localStorage.setItem(token, JSON.stringify(user.token));

  postLogin(user:User) : Observable<string>{

    return this.http.post<string>(this.URL_LOGIN, user, httpOptions)
      .pipe(
        
        tap(client => this.log(`login successful`)),
        catchError(this.handleError('login', ""))
      );

    
  }




  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  private log(message: string) {
    console.log('posting the loggin: ' + message);
  }
}
