import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { User, SearchResults } from './github-api.model';

@Injectable()
export class  GithubService {
  readonly API_URL = 'https://api.github.com';
  readonly WHAT = ['repositories', 'commits', 'code', 'issues', 'users'];

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.API_URL}/users`);
  }

  search<T>(what: string, paramsHeader?: string): Observable<SearchResults<T>> {
    const params = new HttpParams().append('q', paramsHeader);
    if (this.WHAT.indexOf(what) === -1) {
      return throwError(() => `Searching for ${what} is not supported. The available types are: ${this.WHAT.join(', ')}.`);
    }
    return this.http.get<SearchResults<T>>(`${this.API_URL}/search/${what}`, { params });
  }

}