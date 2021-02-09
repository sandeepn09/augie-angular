import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import {
  AppResponse,
  SignupStats,
  AppSettings
} from "../models/user-models";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/internal/operators";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  statsUrl =
    "https://augiealb.augie.app/wl-counts";

  settingsUrl =
    "https://augiealb.augie.app/app-settings";

    data: AppResponse;

    headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('rejectUnauthorized', 'false');

  constructor(private http: HttpClient) { }

  public getSignupStats(): Observable<SignupStats> {
    console.log("Fetching all signups");
    return this.http.get<SignupStats>(this.statsUrl, {headers: this.headers});
  }

  public getAppSettings(): Observable<AppSettings[]> {
    console.log("Fetching AppSettings");
    return this.http.get<AppSettings[]>(this.settingsUrl, {headers: this.headers});
  }
}
