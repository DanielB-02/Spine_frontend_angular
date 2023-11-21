import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Platform} from "../../model/platform";
import {PlatformService} from "../../services/platform.service";

@Component({
  selector: 'app-platform-form',
  templateUrl: './platform-form.component.html',
  styleUrls: ['./platform-form.component.css']
})
export class PlatformFormComponent {

  platform: Platform;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private platformService: PlatformService) {
    this.platform = new Platform();
  }

  onSubmit() {
    this.platformService.save(this.platform).subscribe(result => this.gotoPlatformList());
  }

  gotoPlatformList() {
    this.router.navigate(['/platforms']);
  }
}
