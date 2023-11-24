import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Question} from "../../model/question/question";
import {QuestionService} from "../../services/question-service.service";

@Component({
  selector: 'app-platform-detail',
  templateUrl: './platform-detail.component.html',
  styleUrls: ['./platform-detail.component.css']
})
export class PlatformDetailComponent implements OnInit {
  platformName: string;
  questions: Question[];

  constructor(private route: ActivatedRoute,
              private questionService: QuestionService) { }

  ngOnInit(): void {
    this.platformName = this.route.snapshot.paramMap.get('name');
    this.loadQuestions();
  }
  private loadQuestions(): void {
    this.questionService.getQuestionsForPlatform()
      .subscribe(questions => this.questions = questions);
  }
}
