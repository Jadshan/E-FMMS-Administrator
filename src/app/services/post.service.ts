import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  getAllPosts(): Observable<post[]> {
    return this.http.get<post[]>(this.apiBaseUrl + 'api/Post');
  }

  getPostById(id: string): Observable<post>{
   return this.http.get<post>(this.apiBaseUrl + 'api/post/' + id)
  }
}
