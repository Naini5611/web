import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IAuthor } from '../interface/author.interface';

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
        return res.data
      }), 
      catchError((err, caught) => {
        return throwError(() => new Error(err)) 
      })
    )
  }

  postAuthor(author: IAuthor) {
    const url = this.API_URL + 'authors';

    return this.http.post(url, author).pipe(
      map((res: any) => {
        return res.data
      }), 
      catchError((err, caught) => {
        console.log("🚀 ~ file: http.service.ts:35 ~ HttpService ~ catchError ~ err:", err)
        return throwError(() => new Error(err)) 
      })
    )
  }

  //Institutions
  getInstitutions(): Observable<any> {
    const url = this.API_URL + 'institutions';
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.data
      }), 
      catchError((err, caught) => {
        return throwError(() => new Error(err)) 
      })
    )
  }
}
