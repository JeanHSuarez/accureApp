import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeLog } from '../common/time-log';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeLogService {

  private baseUrl = 'http://localhost:8200/timelog/timelogs';

  constructor(private httpClient: HttpClient) { }

  getTimeLogList(): Observable<TimeLog[]> {
    return this.httpClient.get<TimeLog[]>(this.baseUrl);
  }
}

interface GetResponse {
  timelogs: TimeLog[];
}