import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlatformComponent} from "./view/platform/platform.component";
import {PlatformFormComponent} from "./view/platform-form/platform-form.component";
import {DashboardComponent} from "./view/dashboard/dashboard/dashboard.component";
import {PlatformDetailComponent} from "./view/platform-detail/platform-detail.component";
import {LoginComponent} from "./view/login/login.component";

import {AdminPanelComponent} from "./view/admin-panel/admin-panel.component";
import {AddUserComponent} from "./view/admin-panel/admin-panel-options/add-user/add-user.component";

const routes: Routes = [
  { path: 'platforms', component: PlatformComponent },
  { path: 'addplatform', component: PlatformFormComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'platform/:id', component: PlatformDetailComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'add-user', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
