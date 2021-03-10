import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from 'src/app/shared/config';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts = (userId: number = 1) => {
    return this.http.get(`${apiBaseUrl}/posts?userId=${userId}`);
  }
}
