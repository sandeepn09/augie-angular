import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import {
  SignupRequest,
  AppResponse,
  ReferralRequest,
  SignupDetails,
  UserInquiry,
  UserQuery,
  SignupContent,
} from "../models/user-models";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/internal/operators";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userSignupUrl = "https://augiealb.augie.app/v2/signup";

  signupsUrl = "https://augiealb.augie.app/wl-signups";

  signupsUrlV2 = "https://augiealb.augie.app/v2/wl-signups";

  referUrl = "https://augiealb.augie.app/refer";

  inquiryUrl = "https://augiealb.augie.app/user-inquiry";
  // userSignupUrl = "http://ec2-13-59-125-34.us-east-2.compute.amazonaws.com:8085/signup";
  //referUrl =
  // "http://ec2-13-59-125-34.us-east-2.compute.amazonaws.com:8085/refer";
  data: AppResponse;

  headers = new HttpHeaders()
    .set("content-type", "application/json")
    .set("Access-Control-Allow-Origin", "*")
    .set("rejectUnauthorized", "false");

  constructor(private http: HttpClient) {}

  public signup(signupRequest: SignupRequest): Observable<AppResponse> {
    console.log("signupRequest in service", signupRequest);
    return this.http.post<AppResponse>(this.userSignupUrl, signupRequest, {
      headers: this.headers,
    });
  }

  public refer(referralRequest: ReferralRequest): Observable<AppResponse> {
    console.log("signupRequest in service", referralRequest);
    return this.http.post<AppResponse>(this.userSignupUrl, referralRequest, {
      headers: this.headers,
    });
  }

  public getAllSignups(): Observable<SignupDetails[]> {
    console.log("Fetching all signups");
    return this.http.get<SignupDetails[]>(this.signupsUrl, {
      headers: this.headers,
    });
  }

  public getSignups(userQuery: UserQuery): Observable<SignupContent> {
    console.log("Fetching signups for", userQuery);

    let params = new HttpParams()
      .set("name", userQuery.name)
      .set("email", userQuery.email)
      .set("page", userQuery.page)
      .set("numRecords", userQuery.numRecords);

    return this.http.get<SignupContent>(this.signupsUrlV2, {
      params,
      headers: this.headers,
    });
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  public sendMessage(userInquiry: UserInquiry): Observable<AppResponse> {
    console.log("userInquiry in service", userInquiry);
    return this.http.post<AppResponse>(this.inquiryUrl, userInquiry, {
      headers: this.headers,
    });
  }

  setData(respData: AppResponse) {
    this.data = respData;
    console.log("respData", this.data);
  }

  getData(): AppResponse {
    return this.data;
  }
}
