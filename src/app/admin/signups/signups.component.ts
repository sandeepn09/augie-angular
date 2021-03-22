import { Component, OnInit } from "@angular/core";
import {
  SignupDetails,
  AppResponse,
  Data,
  UserQuery,
} from "../../models/user-models";
import { Router } from "@angular/router";
import { UserService } from "../../service/user-service";
import { timer } from 'rxjs';

@Component({
  selector: "app-signups",
  templateUrl: "./signups.component.html",
  styleUrls: ["./signups.component.css"],
})
export class SignupsComponent implements OnInit {
  success = false;
  signups: SignupDetails[];
  totalPages: number[];

  userQuery: UserQuery = {
    name: "",
    email: "",
    page: "0",
    numRecords: "25",
  };

  constructor(
    private router: Router,
    private data: Data,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.searchUsers();
  }

  searchUsers() {
    
    this.userService.getSignups(this.userQuery).subscribe((response) => {
      this.signups = response.content;
      
      this.totalPages = Array.from(Array(response.totalPages).keys());
      console.log("Signups Response: ", this.totalPages);

      this.success = true;

      // this.userService.setData(this.appResponse);

      // this.router.navigate(["/wl-confirm"]);
    });
  }

  setPage(page) {
    this.userQuery.page = page;
    console.log("Current Page", this.userQuery.page);
    this.searchUsers();
  }

  clearSearch() {
    this.userQuery.name="";
    this.userQuery.page="0"
    this.userQuery.email="";
    this.searchUsers();
  }
}
