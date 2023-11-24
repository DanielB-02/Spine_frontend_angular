import {Question} from "../model/question/question";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Platform} from "../model/platform/platform";

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private platformsUrl: string;
  constructor(private http: HttpClient) {
    this.platformsUrl = 'http://localhost:8081/platform'
  }

  getQuestionsForPlatform(): Observable<Question[]> {
    return this.http.get<Question[]>(this.platformsUrl);
  }
  public save(question: Question) {
    return this.http.post<Question>(this.platformsUrl, question);
  }
}

export class QuestionServiceService {
}
