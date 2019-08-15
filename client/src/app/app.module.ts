import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogGetComponent } from './blog-get/blog-get.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { blogService } from './blog.service';


@NgModule({
  declarations: [
  	RootComponent,
    LoginComponent,
    HomeComponent,
    BlogAddComponent,
    BlogGetComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
       ReactiveFormsModule
  ],
  providers: [blogService],
  bootstrap: [RootComponent]
})
export class AppModule { }
