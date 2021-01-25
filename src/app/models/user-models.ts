import { Injectable } from "@angular/core";

export class SignupRequest {
  firstName: string;
  lastName: string;
  email: string;
}

export class ReferralRequest {
  firstName: string;
  lastName: string;
  email: string;
  referralToken: string;
}

export class AppResponse {
  description: string;
  message: string;
  result: string;
  code: number;
  details: any;
}

@Injectable({
  providedIn: "root",
})
export class Data {
  public storage: AppResponse;

  public constructor() {}
}
