import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


import { share } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class Employeeservice{

  private BASE_URL ='https://reqres.in';
  private GetEmployeeDta = '/api/users';
  private GetEmployeePhoto = '/api/unknown';

  constructor(
    private _http: HttpClient
  ) { 

  }

  //get employee data 1st page
  getUser(): Observable<any> {
        return this._http
            .get<any>(this.BASE_URL + this.GetEmployeeDta, { responseType: 'json' })
            .pipe(share());
    }

    //get employee data 1st page
  getUserPage(id: number): Observable<any> {
    return this._http
        .get<any>(this.BASE_URL + this.GetEmployeeDta + '?page='+ id, { responseType: 'json' })
        .pipe(share());
  }

  //add employee data
  addUser(body: any): Observable<any> {
        return this._http
            .post<any>(this.BASE_URL + this.GetEmployeeDta,body , { responseType: 'json' })
            .pipe(share());
  }

  //edit employee data
  editUser(body: any): Observable<any> {
    return this._http
        .put<any>(this.BASE_URL + this.GetEmployeeDta + '/' + body.id,body , { responseType: 'json' })
        .pipe(share());
  }

  //delete employee data
  deleteUser(body: any): Observable<any> {
    return this._http
        .delete<any>(this.BASE_URL + this.GetEmployeeDta + '/' + body.id, { responseType: 'json' })
        .pipe(share());
  }

  //get employee photo data
  getUserPhoto(): Observable<any> {
    return this._http
        .get<any>(this.BASE_URL + this.GetEmployeePhoto , { responseType: 'json' })
        .pipe(share());
  }

  //get employee photo data page 2
  getUserPhotoPage(): Observable<any> {
    return this._http
        .get<any>(this.BASE_URL + this.GetEmployeePhoto + '?page=2', { responseType: 'json' })
        .pipe(share());
  }
}
