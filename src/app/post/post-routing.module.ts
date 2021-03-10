import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { GetPosts } from '../shared/resolve/getPosts';


const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    resolve: {
      posts: GetPosts
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
