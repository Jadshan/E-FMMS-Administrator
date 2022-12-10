import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { post } from '../models/post.model';
import { updatePost } from '../models/update-post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  apiBaseUrl = environment.apiBaseUrl;

  getAllPosts(): Observable<post[]> {
    return this.http.get<post[]>(this.apiBaseUrl + 'api/Post');
  }

  getPostById(id: string): Observable<post> {
    return this.http.get<post>(this.apiBaseUrl + 'api/post/' + id);
  }

  updatePostById(
    id: string | undefined,
    updatedPost: updatePost
  ): Observable<post> {
    return this.http.put<post>(this.apiBaseUrl + 'api/post/' + id, updatedPost);
  }

  addNewPost(addPostRequest: updatePost): Observable<post> {
   return this.http.post<post>(this.apiBaseUrl + 'api/Post', addPostRequest);
  }

  deletePost(id: string | undefined): Observable<post> {
   return this.http.delete<post>(this.apiBaseUrl + 'api/post/' + id);
  }
}
