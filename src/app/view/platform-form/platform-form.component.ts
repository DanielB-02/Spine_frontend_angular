import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Platform} from "../../model/platform/platform";
import {PlatformService} from "../../services/platform.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-platform-form',
  templateUrl: './platform-form.component.html',
  styleUrls: ['./platform-form.component.css']
})
export class PlatformFormComponent {

  platform: Platform;
  platforms: Platform[];
  errorShown: boolean =false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private platformService: PlatformService) {
    this.platform = new Platform();
  }

  ngOnInit() {
    this.platformService.findAll().subscribe(
      data => {
        this.platforms = data;
      });
  }
  onSubmit() {
    if(this.checkName(this.platform.platformName)) {
      this.platformService.save(this.platform).subscribe(result => this.gotoPlatformList());
    }
  }

  checkName(platformName:string){
    for(var existingPlatform of this.platforms){
      if(existingPlatform.platformName == platformName){
        this.errorShown = true;
        setTimeout(() => {
          this.errorShown = false;
        }, 7000);
        return false

      }
    }
  return true
  }

  gotoPlatformList() {
    this.router.navigate(['/platforms']);
  }
}
