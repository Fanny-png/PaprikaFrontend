import { Component } from '@angular/core';
import { Admin } from './Models/Admin';
import { AdminService } from './Services/admin.service';
import { GoogleApiService, UserInfo } from './Services/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'webbprojekt_frontend';
  admins: Admin[] = [];
  userInfo: UserInfo;

  constructor(
    private adminService: AdminService,
    private readonly googleApi: GoogleApiService
  ) {}

  ngOnInit(): void {
    this.adminService
      .getAdmins()
      .subscribe((result: Admin[]) => (this.admins = result));

    this.googleApi.userProfileSubject.subscribe((info) => {
      this.userInfo = info;
    });
  }
}
