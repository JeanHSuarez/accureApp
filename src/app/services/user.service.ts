import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8200/user/users';

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }
}

interface GetResponse {
  users: User[];
}
