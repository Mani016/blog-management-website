import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { blogService } from '../blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  angForm: FormGroup;
  blog: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: blogService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
     BlogTitle: ['', Validators.required ],
      BlogDescription: ['', Validators.required ],
      Author: ['', Validators.required ],
      AuthorDescription:['',Validators.required]
      
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editblog(params.id).subscribe(res => {
          this.blog = res;
      });
    });
  }

  onClickSubmit(BlogTitle,BlogDescription,Author,AuthorDescription) {
    this.route.params.subscribe(params => {
      this.ps.updateBlog(BlogTitle,BlogDescription,Author,AuthorDescription,params.id);
      this.router.navigate(['blogs']);
    });
  }
}
