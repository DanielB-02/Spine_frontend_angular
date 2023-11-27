import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlatformComponent} from "./view/platform/platform.component";
import {PlatformFormComponent} from "./view/platform-form/platform-form.component";
import {DashboardComponent} from "./view/dashboard/dashboard/dashboard.component";
import {PlatformDetailComponent} from "./view/platform-detail/platform-detail.component";

const routes: Routes = [
  { path: 'platforms', component: PlatformComponent },
  { path: 'addplatform', component: PlatformFormComponent },
  { path: 'dashboard', component: DashboardComponent }
  { path: 'platform/:id', component: PlatformDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
