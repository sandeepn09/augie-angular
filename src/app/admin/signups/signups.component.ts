import { Component, OnInit } from "@angular/core";
import { SignupDetails, AppResponse, Data } from "../../models/user-models";
import { Router } from "@angular/router";
import { UserService } from "../../service/user-service";

@Component({
  selector: "app-signups",
  templateUrl: "./signups.component.html",
  styleUrls: ["./signups.component.css"],
})
export class SignupsComponent implements OnInit {
  success = false;
  signups: SignupDetails[];

  constructor(
    private router: Router,
    private data: Data,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAllSignups().subscribe((response) => {
      this.signups = response;
      console.log("Signups Response: ", this.signups);

      this.success = true;

      // this.userService.setData(this.appResponse);

      // this.router.navigate(["/wl-confirm"]);
    });
  }
}
