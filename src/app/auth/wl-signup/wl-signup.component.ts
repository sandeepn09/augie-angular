import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  SignupRequest,
  AppResponse,
  Data,
} from "../../models/user-models";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { UserService } from "../../service/user-service";


@Component({
  selector: 'app-wl-signup',
  templateUrl: './wl-signup.component.html',
  styleUrls: ['./wl-signup.component.css']
})
export class WlSignupComponent implements OnInit {
  signupRequest: SignupRequest = {
    email: null,
    firstName: null,
    lastName: null,
  };

  private appResponse: AppResponse = {
    code: 0,
    description: "",
    message: "",
    result: "",
    details: {},
  };
  staticAlertClosed: true;
  error = null;
  success: any = null;

  constructor(
    private router: Router,
    private data: Data,
    private userService: UserService
  ) {}

  ngOnInit() {}

  submitForm(form: NgForm) {
    this.signupRequest.email = form.value.email;
    this.signupRequest.firstName = form.value.firstName;
    this.signupRequest.lastName = form.value.lastName;

    console.log(this.signupRequest);

    this.userService.signup(this.signupRequest).subscribe((response) => {
      this.appResponse = response;
      console.log("App Response in subscribe: ", this.appResponse);
      
      this.success = true;

      this.userService.setData(this.appResponse);

      this.router.navigate(["/wl-confirm"]);
    },
    error => {
      this.appResponse = {
        code: 0,
        description: "An error occured while processing your request",
        message: "Processing Error",
        result: "ERROR",
        details: {},
      };

      this.userService.setData(this.appResponse);

      this.router.navigate(["/wl-confirm"]);
    });
  }
}