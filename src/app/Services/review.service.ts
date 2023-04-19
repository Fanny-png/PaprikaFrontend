import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../Models/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private url = 'Review';
  private reviews: Review[];
  constructor(private http: HttpClient) {}

  public getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateReview(review: Review): Observable<Review[]> {
    return this.http.put<Review[]>(
      `${environment.apiUrl}/${this.url}/${review.review_id}`,
      review
    );
  }
  public getReview(id: number): Observable<Review> {
    return this.http.get<Review>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createReview(review: Review): Observable<Review[]> {
    return this.http.post<Review[]>(
      `${environment.apiUrl}/${this.url}`,
      review
    );
  }

  public deleteReview(id: number | undefined): Observable<Review[]> {
    return this.http.delete<Review[]>(
      `${environment.apiUrl}/${this.url}/${id}`
    );
  }
}
