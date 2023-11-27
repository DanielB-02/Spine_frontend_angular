import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { PlatformComponent } from './view/platform/platform.component';
import { PlatformFormComponent } from './view/platform-form/platform-form.component';
import {AppRoutingModule} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {PlatformService} from "./services/platform.service";
import { DashboardComponent } from './view/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    PlatformComponent,
    PlatformFormComponent,
    DashboardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlatformService],

  bootstrap: [AppComponent]
})
export class AppModule { }
