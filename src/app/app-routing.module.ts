import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { from } from 'rxjs';
import { AssetComponent } from './asset/asset.component';
import { BeaconsComponent } from './beacons/beacons.component';
import { ZoneComponent } from './zone/zone.component';
import { AssetTypeComponent } from './asset-type/asset-type.component';
import { LocationComponent } from './location/location.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user/dashboard',
    component: UserdashboardComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'admin/asset',
    component: AssetComponent
  }, {
    path: 'admin/asset-type',
    component: AssetTypeComponent
  },
  {
    path: 'admin/zone',
    component: ZoneComponent
  },{
    path: 'admin/beacons',
    component: BeaconsComponent
  },{
    path: 'admin/location',
    component: LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
