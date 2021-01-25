import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Settings {
  // augie_service_url: "http://ec2-3-135-217-23.us-east-2.compute.amazonaws.com:8085/";
  // user_Service_endpoint: "signup";
  // user_signup_url = this.augie_service_url + this.user_Service_endpoint;

  constructor() {}

  getUserServiceEndpoint() {
    // return this.user_signup_url;
  }
}
