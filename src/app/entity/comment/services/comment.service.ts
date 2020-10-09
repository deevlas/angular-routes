import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../../../models/comment';
import {IPost} from '../../../models/post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<IComment[]>{
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getCommentsByPostId(id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
