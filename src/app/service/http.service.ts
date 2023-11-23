import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private API_URL = 'http://localhost:3000/api/'
  constructor(
    private http: HttpClient
  ) { }

  getAuthors(): Observable<any> {
    const url = this.API_URL + 'authors';
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log("🚀 ~ file: http.service.ts:19 ~ HttpService ~ map ~ res:", res)
        return res.data
      }), 
      catchError((err, caught) => {
        console.log("🚀 ~ file: http.service.ts:23 ~ HttpService ~ catchError ~ err:", err)
        return throwError(() => new Error(err)) 
      })
    )
  }
}
