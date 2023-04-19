import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import {
  GoogleApiService,
  UserInfo,
} from 'src/app/Services/google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'angular-google-oauth-example';
  user: User | any;
  users: User[] = [];
  mailSnippets: string[] = [];
  userInfo: UserInfo;

  constructor(
    private readonly googleApi: GoogleApiService,
    private userService: UserService
  ) {
    googleApi.userProfileSubject.subscribe((info) => {
      this.userInfo = info;
      this.userService.getUsers().subscribe((result: User[]) => {
        this.users = result;
        let checkIFContain: string[] = [];
        for (let anv of this.users) {
          checkIFContain.push(anv.user_email);
        }
        if (this.userInfo?.info.email) {
          let check = this.userInfo.info.email;
          check.toString();
          if (checkIFContain.includes(check)) {
            console.log('Användaren finns redan så ingen ny skapas');
          } else {
            console.log('Användaren finns inte så det skapas en ny');
            this.user = {
              user_id: null,
              user_firstname: this.userInfo.info.given_name,
              user_lastname: this.userInfo.info.family_name,
              user_email: this.userInfo.info.email,
              user_address: '',
              user_country: '',
              user_city: '',
              user_zipcode: '',
              user_mobilephone: '',
            };

            console.log('Användare', this.user);
            this.userService
              .createUser(this.user)
              .subscribe((Response: any) => {
                console.log(Response);
              });
          }
        }
      });
    });
  }

  ngOnInit(): void {
    this.googleApi.userProfileSubject.subscribe((info) => {
      this.userInfo = info;
    });
  }

  saveUser() {
    this.userService.createUser(this.user);
  }

  login() {
    this.googleApi.login();
  }

  isLoggedIn(): boolean {
    this.ngOnInit();
    return this.googleApi.isLoggedIn();
  }

  logout() {
    this.googleApi.signOut();
  }
}
