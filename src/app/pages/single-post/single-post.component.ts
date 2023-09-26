import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export default class SinglePostComponent implements OnInit {
  postData: any;
  similarPosts: Array<object> = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      // console.log(val);

      this.postService.getOnePost(val['id']).then((post) => {
        // console.log(post);
        this.postData = post?.data;
        this.getSimilarPost(this.postData.category.categoryId);
        
      });
    });
  }

  getSimilarPost(id: string) {
    this.postService.getSimilar(id).then((data) => {
      this.similarPosts = data;
      // console.log(this.similarPosts);
      
    });
  }
}
