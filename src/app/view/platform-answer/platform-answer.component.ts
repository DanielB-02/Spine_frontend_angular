import {Component, OnInit} from '@angular/core';
import {Platform} from "../../model/platform/platform";
import {Question} from "../../model/question/question";
import {Answer} from "../../model/answer/answer";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../services/question.service";
import {PlatformService} from "../../services/platform.service";
import {AnswerService} from "../../services/answer.service";

@Component({
  selector: 'app-platform-answer',
  templateUrl: './platform-answer.component.html',
  styleUrl: './platform-answer.component.css'
})
export class PlatformAnswerComponent implements OnInit{

  platformId: string;
  platform: Platform;
  answers: Answer[];
  constructor(private route: ActivatedRoute,
              private answerService: AnswerService,
              private platformService: PlatformService) { }
  ngOnInit(): void {
    this.platformId = this.route.snapshot.paramMap.get('id');
    // this.loadPlatform();
    this.loadAnswers();
  }
  private loadPlatform(): void {
    this.platformService.find(this.platformId)
      .subscribe(platform => this.platform = platform);
  }
  private loadAnswers(): void {
    this.answerService.getAnswersForPlatform(this.platformId)
      .subscribe(answer => this.answers = answer);
  }

}
