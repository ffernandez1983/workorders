import { Injectable } from '@angular/core';
import { Client } from '../_model/client'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private URL_CLIENTS= "http://localhost:3000/clients"
  
  constructor(private http:HttpClient) { }

  getClients():Observable<Client[]>{

    return this.http.get<Client[]>(this.URL_CLIENTS)
      .pipe(
        tap(client => this.log(`fetched clients`)),
        catchError(this.handleError('getClients', []))
      );

    
  }

  getClientById(id:string):Observable<Client>{

    return this.http.get<Client>(this.URL_CLIENTS +'/'+ id)
      .pipe(
        tap(
          data => this.log('fetched client' +":"+  data),
          catchError => this.handleError('getClient' +":"+ catchError)
        )
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
    console.log('getting the Clients: ' + message);
  }
}
