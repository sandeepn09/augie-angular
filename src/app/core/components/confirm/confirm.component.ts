import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SignupRequest, AppResponse, Data } from "../../../models/user-models";
import { UserService } from "../../../service/user-service";

@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.css"],
})
export class ConfirmComponent implements OnInit {
  messageDetails: AppResponse = {
    code: 0,
    description: "",
    message: "",
    result: "",
    details: {},
  };

  constructor(
    private appResponse: Data,
    private userService: UserService,
    private router: Router
  ) {
    this.messageDetails = this.userService.getData();
    console.log("Data in messages", this.messageDetails);
  }

  ngOnInit(): void {}

  retryReferral() {
    console.log("Yes Refcode", this.messageDetails.details.refcode);

    this.router.navigate(["/signup"], {
      queryParams: { refcode: this.messageDetails.details.refcode },
    });
  }
}
