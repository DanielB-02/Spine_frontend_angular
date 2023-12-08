import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Question} from "../../model/question/question";
import {QuestionService} from "../../services/question.service";
import {Platform} from "../../model/platform/platform";
import {PlatformService} from "../../services/platform.service";
import {Answer} from "../../model/answer/answer";
import {AnswerService} from "../../services/answer.service";

@Component({
  selector: 'app-platform-detail',
  templateUrl: './platform-detail.component.html',
  styleUrls: ['./platform-detail.component.css']
})
export class PlatformDetailComponent implements OnInit {
  platformId: string;
  platform: Platform;
  questions: Question[];
  answers: Answer[];

  constructor(private route: ActivatedRoute,
              private questionService: QuestionService,
              private platformService: PlatformService,
              private answerService: AnswerService) { }

  ngOnInit(): void {
    this.platformId = this.route.snapshot.paramMap.get('id');
    this.loadPlatform();
    this.loadQuestions();
    this.loadAnswers()
  }
  private loadPlatform(): void {
    this.platformService.find(this.platformId)
      .subscribe(platform => this.platform = platform);
  }

  private loadQuestions(): void {
    this.questionService.getQuestionsForPlatform(this.platformId)
      .subscribe(questions => this.questions = questions);
  }
  private loadAnswers(): void {
    this.answerService.getAnswersForPlatform(this.platformId)
      .subscribe(answer => this.answers = answer);
  }
}
