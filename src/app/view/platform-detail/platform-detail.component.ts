import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Question} from "../../model/question/question";
import {QuestionService} from "../../services/question.service";
import {Platform} from "../../model/platform/platform";
import {PlatformService} from "../../services/platform.service";

@Component({
  selector: 'app-platform-detail',
  templateUrl: './platform-detail.component.html',
  styleUrls: ['./platform-detail.component.css']
})
export class PlatformDetailComponent implements OnInit {
  platformId: string;
  platform: Platform;
  questions: Question[];

  constructor(private route: ActivatedRoute,
              private questionService: QuestionService,
              private platformService: PlatformService) { }

  ngOnInit(): void {
    this.platformId = this.route.snapshot.paramMap.get('id');
    this.loadPlatform();
    this.loadQuestions();
  }
  private loadPlatform(): void {
    this.platformService.find(this.platformId)
      .subscribe(platform => this.platform = platform);
  }

  private loadQuestions(): void {
    this.questionService.getQuestionsForPlatform(this.platformId)
      .subscribe(questions => this.questions = questions);
  }
}
