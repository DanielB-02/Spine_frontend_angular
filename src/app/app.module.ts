import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { PlatformComponent } from './view/platform/platform.component';
import { PlatformFormComponent } from './view/platform-form/platform-form.component';
import {AppRoutingModule} from "./app.routes";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {PlatformService} from "./services/platform.service";
import { DashboardComponent } from './view/dashboard/dashboard/dashboard.component';
import { PlatformDetailComponent } from './view/platform-detail/platform-detail.component';
import { NavigationColumnComponent } from './view/navigation-column/navigation-column.component';
import {ApiHeadersInterceptor} from "./conf/http-interceptor";


@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    PlatformComponent,
    PlatformFormComponent,
    DashboardComponent,
    PlatformDetailComponent,
    NavigationColumnComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    PlatformService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHeadersInterceptor,
      multi: true,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
