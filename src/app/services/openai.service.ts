import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Review } from '../../_core/_models/review';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  constructor(
    private http: HttpClient
  ) { }

  getReviewResponse(review: Review):Observable<Review> {
    return this.http.post<Review>(
      'https://aireviewbackend.onrender.com/completions',
      review,
      {
        headers: this.getHeaders()
      }
    )
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

}
