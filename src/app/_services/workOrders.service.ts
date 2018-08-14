import { Injectable } from '@angular/core';
import { WorkOrder } from '../_model/workOrder'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WorkOrdersService {

  private URL_WORKORDERS = "http://localhost:3000/workorders"
  
  constructor(private http:HttpClient) { }

  getWorkOrders():Observable<WorkOrder[]>{

    return this.http.get<WorkOrder[]>(this.URL_WORKORDERS)
      .pipe(
        tap(workorder => this.log(`fetched workorders`)),
        catchError(this.handleError('getWorkOrders', []))
      );

    
  }

  getWorkOrderById(id:string):Observable<WorkOrder>{

    return this.http.get<WorkOrder>(this.URL_WORKORDERS +'/'+ id)
      .pipe(
        tap(
          data => this.log('fetched workorder' +":"+  data),
          catchError => this.handleError('getWorkOrder' +":"+ catchError)
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
    console.log('getting the WorkOrders: ' + message);
  }
}
