import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
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
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    this.dialog.open(ZoneDialog, {
      width: '25rem'
    });
  }
}
@Component({
  selector: 'zone-dialog',
  templateUrl: 'zone-dialog.component.html',
})
export class ZoneDialog {}