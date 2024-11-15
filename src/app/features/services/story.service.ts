import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { CreateStoryRequest } from '../models/create-story-request';
import { Story } from '../models/story.model';

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
    params = params.set('isCompleted', isCompleted ?? false);

    console.log(params);
    return this.http.get<string[]>(`${environment.apiBaseUrl}${this.api}`, {
      params: params
    });
  }

  getStory(title: string): Observable<Story> {
    return this.http.get<Story>(`${environment.apiBaseUrl}${this.api}/${title}`)
  }

  addSentenceToStory(title: string, newSentence: string): Observable<Story> {
    return this.http.put<Story>(`${environment.apiBaseUrl}${this.api}/new-sentence-${title}`, newSentence);
  }
}
