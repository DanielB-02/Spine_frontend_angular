import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlatformComponent} from "./view/platform/platform.component";
import {PlatformFormComponent} from "./view/platform-form/platform-form.component";
import {PlatformDetailComponent} from "./view/platform-detail/platform-detail.component";
import {LoginComponent} from "./view/login/login.component";
import {AdminPanelComponent} from "./view/admin-panel/admin-panel.component";
import {AddUserComponent} from "./view/admin-panel/admin-panel-options/add-user/add-user.component";
import {MainViewComponent} from "./view/main-view/main-view.component";
import {DashboardComponent} from "./view/dashboard/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'main-view', component: MainViewComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'platforms', component: PlatformComponent },
      { path: 'addplatform', component: PlatformFormComponent },
      { path: 'platform/:id', component: PlatformDetailComponent },
      { path: 'adminpanel', component: AdminPanelComponent },
      { path: 'add-user', component: AddUserComponent}
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

