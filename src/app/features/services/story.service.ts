import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { CreateStoryRequest } from '../models/create-story-request';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private api: string = '/api/stories';

  constructor(private http: HttpClient) { }

  createStory(model: CreateStoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}${this.api}`, model);
  }

  getStoryNames(isCompleted?: boolean): Observable<string[]> {
    let params = new HttpParams();

    if (isCompleted) {
      params = params.set('isCompleted', isCompleted);
    }

    return this.http.get<string[]>(`${environment.apiBaseUrl}${this.api}`, {
      params: params
    });
  }
}
