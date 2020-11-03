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

  constructor(private fb: FormBuilder,
    private permissionsService: NgxPermissionsService,
    private http: HttpClient,
    public router: Router,
    public snackBar: MatSnackBar, private service: restApiService, private localStorage: LocalStorageService) {

  }
  ngOnInit() {
  }
}
