
import {environment} from "../environments/environment";
import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  private showLoginScreenSource = new BehaviorSubject<boolean>(true);
  showLoginScreen$ = this.showLoginScreenSource.asObservable();

  updateShowLoginScreen(value: boolean): void {
    this.showLoginScreenSource.next(value);
  }
}
