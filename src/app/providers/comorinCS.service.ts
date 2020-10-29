import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { MatSnackBar } from '@angular/material';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Access-Control-Allow-Credentials': 'true',
  })
};

@Injectable({
  providedIn: "root"
})
export class restApiService {
  private comorinCS: string = environment.serviceUrl; // this has to be load from an external config file
  constructor(private http: HttpClient, public snackBar: MatSnackBar,) {
    this.comorinCS = environment.serviceUrl;
  }

  accountLogin(Payload): Observable<any> {
    return this.http.post(this.comorinCS + "/logIn", Payload, httpOptions)
      .pipe(
        tap(heroes => this.log(`Login Success`)),
      );
  }
  projectDetailsUpdation(Payload): Observable<any> {
    return this.http.put(this.comorinCS + "/admin/project", Payload)
      .pipe(
        tap(heroes => this.log(`project updated Success`)),
      );
  }
  deleteProject(Payload): Observable<any> {
    return this.http.delete(this.comorinCS + "/project?projectId=" + Payload.projectId)
      .pipe(
        tap(heroes => this.log(`delete project success`)),
      );
  }
  projectList(): Observable<any> {
    return this.http.get(this.comorinCS + "/project")
      .pipe(
        tap(heroes => this.log(`fetch project success`)),
      );
  }
  openSnackbar(message: string) {
    return this.snackBar.open(message, "close",
      { verticalPosition: 'bottom', horizontalPosition: 'right', duration: 4000, panelClass: ['snackbarStyle'] });
  }

  private log(message: string) {
    console.log("service log : " + message);
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || "";
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
  }
}
