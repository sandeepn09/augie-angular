import { Component, OnInit } from '@angular/core';
import { AppSettings, Data } from 'src/app/models/user-models';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  
  success = false;
  appSettings: AppSettings[];

  constructor(
    private router: Router,
    private data: Data,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService.getAppSettings().subscribe((response) => {
      this.appSettings = response;
      console.log("Signups Response: ", this.appSettings);

      this.success = true;

      // this.userService.setData(this.appResponse);

      // this.router.navigate(["/wl-confirm"]);
    });
  }
}
