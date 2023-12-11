import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

import {UserStorageService} from "../../auth/user-storage.service";
import {LoginStateService} from "../../services/login.state.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-navigation-column',
  templateUrl: './navigation-column.component.html',
  styleUrl: './navigation-column.component.scss'
})
export class NavigationColumnComponent implements AfterViewInit {
  @ViewChild('uitloggenLink') uitloggenLink: ElementRef;

    constructor(
      private router: Router,
      private authService: AuthService
  ) {}

  ngAfterViewInit(): void  {
    this.uitloggenLink.nativeElement.addEventListener('click', () => {

      // this.authService.logout();
    })
  }

  tets(): void {
    // alert('tets');
    this.router.navigateByUrl('/login');
  }
}
