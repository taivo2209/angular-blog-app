import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredPosts: Array<object> = [];
  latestPosts: Array<object> = [];

  constructor(private postService: PostsService) {
    this.postService.getData().then((data) => {
      // console.log(data);
      this.featuredPosts = data;
    });
    postService.getLatest().then((dataLatest) => {
      // console.log(dataLatest);
      this.latestPosts= dataLatest;
    });
  }
  ngOnInit(): void {}
}
