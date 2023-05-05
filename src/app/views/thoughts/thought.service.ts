import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts'
  readonly WHAT = ['repositories', 'commits', 'code', 'issues', 'users'];

  constructor(private http: HttpClient) { }

  getThoughts() {
    return this.http.get<Thought[]>(`${this.API}`);
  }
  
  list(page: number, filter: string, favorites: boolean): Observable<Thought[]> {

    const itemsPerPage = 6;
    
    let params = new HttpParams()
    .set("_page", page)
    .set("_limit", itemsPerPage)
    
    if(filter.trim().length > 2) {
      params = params.set("q", filter)
    }
    
    if(favorites) {
      params = params.set("favorite", true)
    }

    return this.http.get<Thought[]>(this.API, { params });
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought)
  }

  edit(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`
    return this.http.put<Thought>(url, thought )
  }

  changeFavorite(thought: Thought): Observable<Thought> {
    thought.favorite = !thought.favorite
    return this.edit(thought)
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`
    return this.http.delete<Thought>(url)
  }

  searchById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`
    return this.http.get<Thought>(url)
  }

}
