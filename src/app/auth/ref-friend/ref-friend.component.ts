import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ReferralRequest, AppResponse } from "../../models/user-models";
import { UserService } from "../../service/user-service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: "app-ref-friend",
  templateUrl: "./ref-friend.component.html",
  styleUrls: ["./ref-friend.component.css"],
})
export class RefFriendComponent implements OnInit {
  referralRequest: ReferralRequest = {
    email: null,
    firstName: null,
    lastName: null,
    referralToken: null,
  };

  private formValues = {
    email: null,
    name: null,
    subject: null,
    message: null,
  };
  staticAlertClosed: true;
  error = null;
  success: any = null;

  private appResponse: AppResponse = {
    code: 0,
    description: "",
    message: "",
    result: "",
    details: {},
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('RefTokenTest',params); // { order: "popular" }
      this.referralRequest.referralToken = params.refcode;
      console.log('Ref token in request', this.referralRequest);
    });
    // console.log('RefTokenParam',this.route.paramMap);
  }

  submitForm(form: NgForm) {
    this.referralRequest.email = form.value.email;
    this.referralRequest.firstName = form.value.firstName;
    this.referralRequest.lastName = form.value.lastName;
    
    this.success = true;
    console.log("referralRequest: ", this.referralRequest);

    console.log(this.referralRequest);

    this.userService.refer(this.referralRequest).subscribe((response) => {
      this.appResponse = response;
      console.log("App Response in referal subscribe: ", this.appResponse);

      this.appResponse.details = {'refcode': this.referralRequest.referralToken};
      this.success = true;

      this.userService.setData(this.appResponse);

      this.router.navigate(["/wl-confirm"]);
      // this.router.navigate(['/wl-confirm'], { queryParams: { 'refcode': this.referralRequest.referralToken } });
    });
  }
}
