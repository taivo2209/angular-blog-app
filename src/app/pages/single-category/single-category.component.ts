import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent implements OnInit {
  postsArray: Array<object> = [];
  categoryOject: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      this.categoryOject = val;
      // console.log(val);
      this.postService.getCategoryPosts(val['id']).then((post) => {
        // console.log(post);
        this.postsArray = post;
      });
    });
  }
}
