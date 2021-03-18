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

export class SignupDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  referralToken: string;
  emailVerified: string;
  referredByToken: string;
  referredByEmail: string;
  createDateTime: string;
  updateDateTime: string;
}

export class SignupStats {
  totalSignups:number;
  recentSignups:number;
  referralCount:number;
}

export class AppSettings {
  settingKey:string;
  settingValue:string;
  settingDescription:string;
  updateDateTime:string;
}

export class UserInquiry {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class Data {
  public storage: AppResponse;

  public constructor() {}
}
