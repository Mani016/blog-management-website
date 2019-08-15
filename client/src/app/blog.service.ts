import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
)

export class blogService {

  uri = 'http://localhost:4000/blogs';

  constructor(private http: HttpClient) { }

  addblog(BlogTitle,BlogDescription,Author,AuthorDescription) {
    console.log(BlogTitle,BlogDescription,Author,AuthorDescription);
    const obj = {
      BlogTitle,
      BlogDescription,
      Author,
      AuthorDescription
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getblogs() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editblog(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateBlog(BlogTitle,BlogDescription,Author,AuthorDescription,id) {
    const obj = {
     BlogTitle,
      BlogDescription,
      Author,
      AuthorDescription
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteblog(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
