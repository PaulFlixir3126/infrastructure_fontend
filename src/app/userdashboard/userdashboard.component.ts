import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { restApiService } from '../providers/comorinCS.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  taskSheetForm: FormGroup;
  taskDetails;
  listofdata = [{
    "slno": "AS011",
    "assetId": "BT31S91EXCH",
    "assetName": "Laptop",
    "BLEId": "E4:33:87:50:4F:FA",
    "LocationName": "Zone  - 1",
    "SubLocation": "HB04A121W",
    "Status": "Active",
  }, {
    "slno": "AS012",
    "assetId": "PX13925CEHCH",
    "assetName": "Phone",
    "BLEId": "F5:FE:23:FA:51:5C",
    "LocationName": "Zone  - 1",
    "SubLocation": "HB04A122W",
    "Status": "Active",
  }, {
    "slno": "AS013",
    "assetId": "31G925CEXCH",
    "assetName": "Chair",
    "BLEId": "E4:33:87:50:4F:FA",
    "LocationName": "Zone  - 2",
    "SubLocation": "HB04A123W",
    "Status": "InActive",
  }, {
    "slno": "AS014",
    "assetId": "YEL352015H",
    "assetName": "Table",
    "BLEId": "E4:33:87:50:4F:FB",
    "LocationName": "Zone  - 2",
    "SubLocation": "HB04A124W",
    "Status": "InActive",
  }, {
    "slno": "AS015",
    "assetId": "BT3AS871EXCH",
    "assetName": "Lamp",
    "BLEId": "E4:33:87:50:4F:FC",
    "LocationName": "Zone  - 2",
    "SubLocation": "HB04A125W",
    "Status": "Active",
  }, {
    "slno": "AS016",
    "assetId": "ZX31S91EXCH",
    "assetName": "Fan",
    "BLEId": "E4:33:87:50:4F:FD",
    "LocationName": "Zone  - 3",
    "SubLocation": "HB04A126W",
    "Status": "InActive",
  }]
  public lineActiveChartData: ChartDataSets[] = [
    { data: [4500, 4600, 4750, 4800, 5000, 6800, 10000], label: 'Active Assets' },
  ];
  public lineInActiveChartData: ChartDataSets[] = [
    { data: [5000, 4000, 3000, 2500, 2000, 3060, 10000], label: 'In-Active Assets' },
  ];
  public lineMissingChartData: ChartDataSets[] = [
    { data: [3, 80, 60, 100, 150, 120, 10000], label: 'Missing Assets' },
  ];
  public lineChartLabels: Label[] = ['May', 'June', 'July', 'Aug', 'Sept', "Oct"];
  // public lineChartOptions;
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "",
      backgroundColor: '',
    },
  ];
  public lineActiveChartLegend: any = { legend: { display: true, labels: { fontColor: 'black' } } }
  public lineInActiveChartLegend: any = { legend: { display: true, labels: { fontColor: 'black' } } }
  public lineMissingChartLegend: any = { legend: { display: true, labels: { fontColor: 'black' } } }
  public lineChartType = 'line';

  public lineChartPlugins = [];
  constructor
    (
      private fb: FormBuilder,
      private datePipe: DatePipe,
      private rolePermisions: NgxPermissionsService,
      private ls: LocalStorageService,
      public snackBar: MatSnackBar,
      public router: Router,
      private sessionstorge: SessionStorageService,
      private restApiService: restApiService
    ) {
  }
  ngOnInit() {

  }
}
