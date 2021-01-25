import { HttpClientModule } from "@angular/common/http";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import {
  SignupRequest,
  AppResponse,
  ReferralRequest,
} from "../models/user-models";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/internal/operators";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userSignupUrl =
    "https://augie-service-load-balancer-1748364356.us-east-2.elb.amazonaws.com/signup";
  referUrl =
    "https://augie-service-load-balancer-1748364356.us-east-2.elb.amazonaws.com/refer";
  // userSignupUrl = "http://ec2-13-59-125-34.us-east-2.compute.amazonaws.com:8085/signup";
  //referUrl =
  // "http://ec2-13-59-125-34.us-east-2.compute.amazonaws.com:8085/refer";
  data: AppResponse;

  constructor(private http: HttpClient) {}

  public signup(signupRequest: SignupRequest): Observable<AppResponse> {
    console.log("signupRequest in service", signupRequest);
    return this.http.post<AppResponse>(this.userSignupUrl, signupRequest);
  }

  public refer(referralRequest: ReferralRequest): Observable<AppResponse> {
    console.log("signupRequest in service", referralRequest);
    return this.http.post<AppResponse>(this.referUrl, referralRequest);
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

  setData(respData: AppResponse) {
    this.data = respData;
    console.log("respData", this.data);
  }

  getData(): AppResponse {
    return this.data;
  }
}
