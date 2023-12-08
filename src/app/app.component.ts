import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { LoginComponent } from "./view/login/login.component";
import {LoginStateService} from "./services/login.state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  constructor(
    public loginComponent: LoginComponent,
    private loginStateService: LoginStateService
  ) { }

  //
  ngAfterViewInit() {
    this.loginStateService.showLoginScreen$.subscribe((value) => {
      this.loginComponent.showLoginScreen = value;
    })
  }
}
