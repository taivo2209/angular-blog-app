import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css'],
})
export class CategoryNavbarComponent implements OnInit {
  categories: Array<object> = [];
  categoryArray: any = [];

  constructor(private categoryService: CategoriesService) {}
  ngOnInit(): void {
    this.categoryService.getData().subscribe((val) => {
      this.categories = val;
      this.categoryArray = this.categories;
    });
  }
}
