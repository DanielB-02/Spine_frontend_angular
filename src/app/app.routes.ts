import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlatformComponent} from "./view/platform/platform.component";
import {PlatformFormComponent} from "./view/platform-form/platform-form.component";
import {DashboardComponent} from "./view/dashboard/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'platforms', component: PlatformComponent },
  { path: 'addplatform', component: PlatformFormComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
