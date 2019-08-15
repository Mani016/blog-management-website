import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { blogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  angForm: FormGroup;
 
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder, private ps: blogService) {
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

  addblog(BlogTitle,BlogDescription,Author,AuthorDescription) {
    this.ps.addblog(BlogTitle,BlogDescription,Author,AuthorDescription);
    this.router.navigate(['blogs']);
  }

  ngOnInit() {
  }

}
