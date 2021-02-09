import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { SignupStats, AppResponse, Data } from "../../models/user-models";

@Component({
  selector: 'app-oveview',
  templateUrl: './oveview.component.html',
  styleUrls: ['./oveview.component.css']
})
export class OveviewComponent implements OnInit {

  success = false;
  signupStats: SignupStats;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getSignupStats().subscribe((response) => {
      this.signupStats = response;
      console.log("Signups Stats: ", this.signupStats);

      this.success = true;

      // this.userService.setData(this.appResponse);

      // this.router.navigate(["/wl-confirm"]);
    });
  }

}
