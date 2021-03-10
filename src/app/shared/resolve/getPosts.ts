import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PostsService } from 'src/app/services/api/posts.service';

@Injectable({
  providedIn: 'root'
})
export class GetPosts implements Resolve<any> {
  constructor(private service: PostsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getPosts();
  }
}
