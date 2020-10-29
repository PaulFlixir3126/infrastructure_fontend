import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { restApiService } from '../providers/comorinCS.service';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from "ngx-store";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  register: FormGroup;
  res;
  checkreq: boolean;
  errorMessage;
  userDetails;
  redirectionData;
  ls;
  passwordStrength: string;
  bar_none: boolean = true;
  bar_weak: boolean;
  bar_medium: boolean;
  bar_strength: boolean;
  progressBarLength: string = 'passwordNone';
  errMessageStyle: string;
  errMessageStyle1: string;
  passwordMatchMessage: string;
  userNameMatchMessage: string;
  private formSumitAttempt: boolean;
  constructor(private fb: FormBuilder,
    private permissionsService: NgxPermissionsService,
    private http: HttpClient,
    public router: Router,
    public snackBar: MatSnackBar, private service: restApiService, private localStorage: LocalStorageService) {

  }
  ngOnInit() {
    this.register = this.fb.group({
      'firstName': ['', [Validators.required, Validators]],
      'lastName': ['', [Validators.required, Validators]],
      'password': ['', [Validators.required]],
      'confirmPassword': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'admin': [''],
      // 'remeberMe': '',
      // 'checkbox': ''
    });
  }
  isFieldValid(field: string) {
    return (
      (!this.register.get(field).valid && this.register.get(field).touched) ||
      (this.register.get(field).untouched && this.formSumitAttempt)
    );
  }
  onSubmit() {
    let registerData = this.register.value;
    console.log("registerdata", registerData);
    let data = {
      "firstName": registerData.firstName,
      "lastName": registerData.lastName,
      "password": registerData.password,
      "email": registerData.email,
      "admin": registerData.admin
    }
    // this.localStorage.set("userName",registerData.firstName);
    this.service.accountCreation(data).subscribe(response => {
      console.log("responseapidata", response);
      if (response) {
        this.snackBar.open("Registered Successful", "close",
          { verticalPosition: 'bottom', horizontalPosition: 'right', duration: 1500, panelClass: ['snackbarStyle'] });
      }
    })
    this.formSumitAttempt = true;
    if (this.register.valid) {
      console.log(this.register.value);

    }
  }
  // save(): void {
  //   console.log('firstName:' + this.register.value.firstName);
  //   console.log('lastName:' + this.register.value.lastName);
  //   console.log('password:' + this.register.value.password);
  //   console.log('confirmPassword:' + this.register.value.confirmPassword);
  //   console.log('email:' + this.register.value.email);
  //   console.log('checkbox:' + this.register.value.checkbox);

  // }

  strength() {
    // console.log("called on change");
    let password = this.register.value.newpassword;
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})");
    let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{5,})");
    if (strongRegex.test(password)) {
      this.passwordStrength = "pw-strong";
      this.progressBarLength = 'passwordStrong';
      this.bar_weak = false;
      this.bar_medium = false;
      this.bar_strength = true;
    } else if (mediumRegex.test(password)) {
      this.passwordStrength = "pw-medium";
      this.progressBarLength = 'passwordMedium';
      this.bar_none = false;
      this.bar_weak = false;
      this.bar_medium = true;
      this.bar_strength = false;
    } else if (password != "") {
      this.passwordStrength = "pw-weak";
      this.progressBarLength = 'passwordWeak';
      this.bar_none = false;
      this.bar_weak = true;
      this.bar_medium = false;
      this.bar_strength = false;
    } else {
      this.passwordStrength = "pw-none";
      this.progressBarLength = 'passwordNone';
      this.bar_none = true;
      this.bar_weak = false;
      this.bar_medium = false;
      this.bar_strength = false;
    }

    console.log("this strength", this.passwordStrength);
  }
  passwordMatch = function () {
    let password = this.register.value.password;
    let confirmPassword = this.register.value.confirmPassword

    if (password == confirmPassword && password != null) {

      this.passwordMatchMessage = "";
      this.errMessageStyle1 = 'matchedStyle1';
    }
    else {

      this.passwordMatchMessage = "Not matched";
      this.errMessageStyle1 = 'unMatchedStyle1';
    }
    // console.log(password + ' --- ' + confirmPassword);
  }
  redirect(to): void {
    this.router.navigate([to]);
  }
}
