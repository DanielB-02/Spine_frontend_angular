import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../model/question/question';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private platformsUrl: string;

  constructor(private http: HttpClient) {
    this.platformsUrl = 'http://localhost:8081/question';
  }

  getQuestionsForPlatform(platformId: string): Observable<Question[]> {
    const url = `${this.platformsUrl}/platform/${platformId}`;
    return this.http.get<Question[]>(url);
  }

}

export class QuestionServiceService {
}
