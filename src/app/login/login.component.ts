import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loginForm!: FormGroup;
  loginData!: boolean;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userNameControl: new FormControl(null, Validators.required),
      passwordControl: new FormControl(null, Validators.required),
    });
  }

  loginUser() {
    console.log(this.loginForm);
  //   const user = this.model.userName;
  //   const password = this.model.password;
  //   this.loginService
  //     .authenticateLogin(user, password)
  //     .subscribe((res: boolean) => {
  //       this.loginData = res;

  //       if (this.loginData == true) {
  //         alert(`Welcome ${user}`);
  //         this.router.navigate(['']);
  //       } else {
  //         alert('Invalid username/password');
  //       }
  //     });
  }

  get formControls(){
    return this.loginForm.controls;
  }

}
