import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiHeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/vnd.spine.api.v2+json',
      'Accept': 'application/vnd.spine.api.v2+json'
    });

    const modifiedReq = req.clone({
      headers: headers,
    });

    return next.handle(modifiedReq);
  }
}
