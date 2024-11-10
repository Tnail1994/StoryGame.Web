import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

}
