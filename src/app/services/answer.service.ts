import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../model/question/question";
import {Answer} from "../model/answer/answer";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private platformsUrl: string;

  constructor(private http: HttpClient) {
    this.platformsUrl = 'http://localhost:8081/answer';
  }
  getAllAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.platformsUrl}`);
  }
}
