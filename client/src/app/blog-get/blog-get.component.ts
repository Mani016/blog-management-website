import { Component, OnInit } from '@angular/core';

import { blogService } from '../blog.service';
import blog from '../blog';

@Component({
  selector: 'app-blog-get',
  templateUrl: './blog-get.component.html',
  styleUrls: ['./blog-get.component.css']
})
export class BlogGetComponent implements OnInit {
  blogs: blog[];
  constructor(private ps: blogService) { }
  ngOnInit() {
    this.ps
      .getblogs()
      .subscribe((data:blog[]) => {
        this.blogs = data;
    });
  }
  
  deleteblog(id) {
    this.ps.deleteblog(id).subscribe(res => {
      this.blogs.splice(id,1);
    });
  }
}
