import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user: User | undefined | any;
  user_id: number;
  user_data: User;
  editUserForm = this.formBuilder.group({
    user_firstname: '',
    user_lastname: '',
    user_email: '',
    user_address: '',
    user_country: '',
    user_city: '',
    user_zipcode: '',
    user_mobilephone: '',
  });
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user_id = this.actRoute.snapshot.params['id'];
    this.userService.getUser(this.user_id).subscribe((user) => {
      this.user_data = user;
    });
  }
  onSubmit() {
    this.userService
      .updateUser(this.user_data)
      .subscribe((result: any) => {
        console.log(result);
        this.router.navigate(['/adminview']);
      });
  }
}
