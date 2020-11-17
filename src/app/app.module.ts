import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Injectable, CUSTOM_ELEMENTS_SCHEMA, Injector, ErrorHandler, enableProdMode } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { DatePipe } from '@angular/common';
// jwt
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './providers/httpInterceptor/http-token-interceptor';
// jwt
//user role try start
import { NgxPermissionsModule } from 'ngx-permissions';

import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
// user role try end
import {

  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LocationComponent, LocationDialog } from './location/location.component';
import { ZoneComponent, ZoneDialog } from './zone/zone.component';
import { AssetComponent, AssetDialog } from './asset/asset.component';
import { AssetTypeComponent, AssetTypeDialog } from './asset-type/asset-type.component';
import { BeaconsComponent, BeaconsDialog } from './beacons/beacons.component';
// enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserdashboardComponent,
    LocationComponent,
    ZoneComponent,
    AssetComponent,
    AssetTypeComponent,
    BeaconsComponent,
    AssetDialog,
    AssetTypeDialog,
    LocationDialog,
    BeaconsDialog,
    ZoneDialog
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    NgxPaginationModule,
    WebStorageModule,
    HttpClientModule,
    //  materials
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ChartsModule,
    // Ng2GoogleChartsModule,
    // user role try start
    NgxPermissionsModule.forRoot(),
    // GoogleChartsModule
    // user role try end
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,

      multi: true
    },
    DatePipe,
  ],
  entryComponents: [ AssetDialog,AssetTypeDialog,LocationDialog,BeaconsDialog,ZoneDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
