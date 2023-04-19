import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { shopping_session } from '../Models/Shopping_session';

@Injectable({
  providedIn: 'root',
})
export class ShoppingSessionService {
  private url = 'Shopping_session';
  private shopping_sessions: shopping_session[];

  constructor(private http: HttpClient) {}

  public getshopping_sessions(): Observable<shopping_session[]> {
    return this.http.get<shopping_session[]>(
      `${environment.apiUrl}/${this.url}`
    );
  }
  public updateshopping_session(
    shopping_session: shopping_session | undefined
  ): Observable<shopping_session[]> {
    return this.http.put<shopping_session[]>(
      `${environment.apiUrl}/${this.url}/${
        shopping_session!.shopping_session_id
      }`,
      shopping_session
    );
  }

  public getshopping_session(id: number): Observable<shopping_session> {
    return this.http.get<shopping_session>(
      `${environment.apiUrl}/${this.url}/${id}`
    );
  }

  public createshopping_session(
    shopping_session: shopping_session | undefined
  ): Observable<any[]> {
    return this.http.post<shopping_session[]>(
      `${environment.apiUrl}/${this.url}`,
      shopping_session
    );
  }

  public deleteshopping_session(
    id: number | undefined
  ): Observable<shopping_session[]> {
    return this.http.delete<shopping_session[]>(
      `${environment.apiUrl}/${this.url}/${id}`
    );
  }
}
