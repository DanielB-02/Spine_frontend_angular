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

  getQuestionsForPlatform(platformName: string): Observable<Question[]> {
    const url = `${this.platformsUrl}`;
    return this.http.get<Question[]>(url);
  }

}
