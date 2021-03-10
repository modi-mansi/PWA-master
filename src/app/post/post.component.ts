import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../shared/models/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Posts[];
  panelOpenState = false;
  constructor(private route: ActivatedRoute) {
    this.posts = this.route.snapshot.data[`posts`];
  }

  ngOnInit() {
    console.log('posts => ', this.posts);
  }

}
