import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organization } from '../common/organization';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private baseUrl = 'http://localhost:8200/org/orgs';

  constructor(private httpClient: HttpClient) { }

  getOrganizationList(): Observable<Organization[]> {
    return this.httpClient.get<Organization []>(this.baseUrl);
  }
}

interface GetResponse {
  organizations: Organization [];
}

