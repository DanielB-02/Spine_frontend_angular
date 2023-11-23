import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platform-detail',
  templateUrl: './platform-detail.component.html',
  styleUrls: ['./platform-detail.component.css']
})
export class PlatformDetailComponent implements OnInit {
  platformName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.platformName = this.route.snapshot.paramMap.get('name');
  }
}
