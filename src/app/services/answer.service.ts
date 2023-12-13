import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from '../model/answer/answer';

import {environment} from "../environments/environment";
import {Question} from "../model/question/question";

const BASIC_URL = environment['BASIC_URL'];

@Injectable({ providedIn: 'root' })
export class AnswerService {
  private answersUrl: string;

  constructor(private http: HttpClient) {
    this.answersUrl = BASIC_URL + 'answer';
  }

  getAnswersOfQuestion(questionId: string): Observable<Answer[]> {
    const url = `${this.answersUrl}/question/${questionId}`;
    return this.http.get<Answer[]>(url);
  }

}
