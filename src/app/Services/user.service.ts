import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'User';
  private users: User[];
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}`);
  }
  public updateUser(user: User): Observable<User[]> {
    return this.http.put<User[]>(
      `${environment.apiUrl}/${this.url}/${user.user_id}`,
      user
    );
  }
  /*
  public getUser(user: User): Observable<User> {
    return this.http.get<User>(
      `${environment.apiUrl}/${this.url}/${user.user_id}`
    );
  }*/

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${environment.apiUrl}/${this.url}`, user);
  }

  /*public deleteUser(user: User): Observable<User[]> {
    return this.http.delete<User[]>(
      `${environment.apiUrl}/${this.url}/${user.user_id}`
    );
  }*/

  public deleteUser(id: number | null): Observable<User[]> {
    return this.http.delete<User[]>(`${environment.apiUrl}/${this.url}/${id}`);
  }
}
