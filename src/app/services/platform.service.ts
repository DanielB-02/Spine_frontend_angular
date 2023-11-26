import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '../model/platform/platform';
import {Observable} from "rxjs";

@Injectable()
export class PlatformService {

  private platformsUrl: string;

  constructor(private http: HttpClient) {
    this.platformsUrl = 'http://localhost:8081/platform';
  }

  public findAll(): Observable<Platform[]> {
    return this.http.get<Platform[]>(this.platformsUrl);
  }

  public save(platform: Platform) {
    return this.http.post<Platform>(this.platformsUrl, platform);
  }

  public find(id: string): Observable<Platform> {
    return this.http.get<Platform>(`${this.platformsUrl}/${id}`);
  }
}
