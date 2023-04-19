import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Models/Admin';
import { environment } from 'src/environments/environment';

const baseUrl = '';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url = 'Admin';
  constructor(private http: HttpClient) {}

  public getAdmins(): Observable<Admin[]> {
    return this.http.get<[Admin]>(`${environment.apiUrl}/${this.url}`);
  }
}
